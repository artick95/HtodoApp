import React from "react";
import { Checkbox, ListItemText } from "@material-ui/core";

function Todo(props) {
  return (
    <div>
      <ul>
        {props.todos.map((todo, index) => {
          return (
            <div className="todo-Row" key={index + 5}>
              <ListItemText key={index}>{"✅" + todo}</ListItemText>

              <Checkbox
                key="checkboX"
                variant="outlined"
                color="secondary"
                onClick={(e) => {
                  props.removeTodo(todo);
                }}
              >
                Done
              </Checkbox>
              {/* <EditIcon /> */}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
