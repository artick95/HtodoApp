import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import db from "./firebase";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const ref = db.collection("todos");
    ref.onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map((doc) => {
        console.log(doc.data())
        return doc.data().todo;
      }));
    });
  }, []);

  const addTodo = (todo) => {
    db.collection('todos').add({ //add creates a unique id for you
    todo: todo,
    });
  };

  const removeTodo = (todoWonnaRemove) => {
    // const newTodos = todos.filter((t) => t !== todoWonnaRemove);
    // setTodos(newTodos);

db.collection('todos').where('todo','==',todoWonnaRemove).get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    doc.ref.delete();
  });
});


  };

  return (
    <div>
      <h1>What's the plan for today 😇 </h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default TodoList;
