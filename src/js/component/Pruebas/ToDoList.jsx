import React, { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState([]);              //Array vacío que almacenará las tareas.
    const [currentTask, setCurrentTask] = useState("");  //String vacío que representa la tarea actual q está siendo escrita x el usuario.

    const addTask = () => {
        if (currentTask !== "") {
            setTasks([...tasks, currentTask]);
            setCurrentTask("");
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    };

    const handleInputChange = (event) => {
        setCurrentTask(event.target.value);
    };

    return (
        <div className="container todo-list">
            <h1>To-Do List</h1>
            <input type="text" value={currentTask} placeholder="Enter Task" onChange={handleInputChange} onKeyDown={handleKeyPress} />
            <button className="btn btn-primary" onClick={addTask}>Add Task</button>
            <ul>
                {console.log(currentTask)}
                {console.log(tasks)}
                {tasks.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    );
}

export default ToDoList;