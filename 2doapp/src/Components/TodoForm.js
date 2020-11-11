import React,{useState} from 'react'
import { Button,TextField } from '@material-ui/core';


function TodoForm(props) {
    const [input, setInput] = useState('')
    

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onSubmit(input)
        setInput('')
    }
    

    return (
        <div className='form-Input'>
           <form onSubmit={handleSubmit}  >
               <TextField placeholder='Add a Todo' onChange={handleChange}
                value={input} className='todo-input' type="text"/></form> 
               <Button variant="contained" onClick={(e)=>{ 
                   props.onSubmit(input)
                   setInput('')

            }} color="primary" disabled={!input} >Add a Todo</Button>

        </div>
    )
}

export default TodoForm
