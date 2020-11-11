import React ,{useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'


function TodoList() {
    const [todos, setTodos] = useState(['portare cane fuori','andare a correre','studiare react'])
    const addTodo = (todo) => {
        // if(!todo.text || /^\s*$/.test(todo.text)){
        //     return
        // }
        const newTodos = [...todos,todo]
        setTodos(newTodos)
        console.log(todos)
    }

    const removeTodo = (todoWonnaRemove) => {
        const newTodos = todos.filter(t=>t!==todoWonnaRemove) 
          console.log(newTodos)
          setTodos(newTodos)
    }






    return (
        <div>
           <h1>What's the plan for today 😇 </h1>
           <TodoForm onSubmit={addTodo} />
           <Todo todos={todos} removeTodo={removeTodo}/>
        </div>
    )
}

export default TodoList
