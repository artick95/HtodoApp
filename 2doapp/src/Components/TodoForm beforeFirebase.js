import React,{useState} from 'react'
import { Button,TextField } from '@material-ui/core';
import Todo from './Todo';


function TodoForm(props) {
    const [input, setInput] = useState('')
    

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onSubmit({
            id:Math.floor(Math.random()*1000),
            text:input
        })
        setInput('')
        props.onSubmit(input)
    }
    

    return (
        <div class='form-Input'>
           <form onSubmit={handleSubmit}  >
               <TextField placeholder='Add a Todo' onChange={handleChange}
                value={input} className='todo-input' type="text"/></form> 
               <Button variant="contained" onClick={(e)=> props.onSubmit(input)} color="primary" disabled={!input} >Add a Todo</Button>

        </div>
    )
}

export default TodoForm
