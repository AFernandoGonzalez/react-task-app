import React from 'react'
import { AiFillDelete } from "react-icons/ai";

// 5 props: unique id, text, completed, 2 functinos to comple and delete tasks
const Task = ({ id, text, completed, completeTask, deleteTask }) => {
    return (
        <div className={completed ? 'singletaskContainer completed' : 'singletaskContainer'}>
            <div
                className='task-text'
                onClick={() => completeTask(id)}
            >
                {text}
            </div>
            <div
                className='task-icon'
                onClick={() => deleteTask(id)}
            >
                <AiFillDelete />
            </div>
        </div>
    )
}

export default Task