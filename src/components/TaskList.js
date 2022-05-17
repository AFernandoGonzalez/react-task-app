import React, { useState } from 'react'
import TaskForm from './TaskForm'
import '../App.css'
import Task from './Task'

const TaskList = () => {

    const [taskList, setTaskList] = useState([])

    // logic here
    const addTask = (task) => {
        // console.log('task added', taskList);
        if (task.text.trim()) {
            task.text = task.text.trim();

            const recentTask = [task, ...taskList]
            setTaskList(recentTask)
            console.log("New Task: ", recentTask);
        }
    };

    // delete
    const deleteTask = (id) => {
        // recentTask not related with: addTask
        const recentTask = taskList.filter(task => task.id !== id);
        setTaskList(recentTask)
        console.log(recentTask);
    };

    // complete task
    const completeTask = (id) => {
        // recentTask not related with: deleteTask
        const recentTask = taskList.map((task)=> {
            if(task.id === id){
                task.completed = !task.completed;
            }
            return task;
        })
        setTaskList(recentTask);
    };

    return (
        <>
            <TaskForm onSubmit={addTask} />
            <div className='list-task-container'>
                {
                    taskList.map((task) => {
                        return (
                            <Task
                                key={task.id}
                                id={task.id}
                                text={task.text}
                                completed={task.completed}
                                deleteTask={deleteTask}
                                completeTask={completeTask}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default TaskList