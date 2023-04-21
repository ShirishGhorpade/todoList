import React, { useState } from "react";

export default function TodoForm(props) {
    //state
    const [input, SetInput] = useState('');

    const handleChange = e => {
        SetInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask({
            id: Math.floor(Math.random() * 1000000),
            text: input,
            isComplete: false
        })
        SetInput('')
    }


    return (
    <form className="todo-form">
        <input type="text" placeholder='Add a todo' onChange={handleChange} className='todo-input' value={input} name="text" />
        <button type="submit" onClick={handleSubmit} className='todo-btn' >ADD TODO</button>
    </form>
    );
}