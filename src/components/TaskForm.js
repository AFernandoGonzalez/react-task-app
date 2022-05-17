import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const TaskForm = (props) => {

    const[input, setInput] = useState('');

    const manageChange = (e) => {
        setInput(e.target.value)
        // console.log(e.target.value);
    }

    const manageSend = (e) => {
        // after sending form : prevents refreshing
        e.preventDefault()
        const newTask = {
            id: uuidv4(),
            text: input,
            completed: false
        };
        console.log("First Created: ", newTask);
        props.onSubmit(newTask);
    };

    return (
        // event listener: onSubmit => sending a new task (manageSend)
        <form className='task-form' onSubmit={manageSend}>
            <input 
                className='taskinput'
                type='text'
                placeholder='Write your task'
                name='text'
                // event listener : onChange => listening every change (manage change )
                onChange={manageChange}
            />
            <button className='btn-task'>Add Task</button>
        </form>
    )
}

export default TaskForm