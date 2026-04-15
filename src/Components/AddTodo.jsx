import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../Redux/Features/TodoSlice';


function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewTodo(input));
        // console.log(input)
        setInput("");
    }
    return (
        <form onSubmit={handleSubmit}>

            <input placeholder='Add new todo' type='text' value={input} onChange={(e) => setInput(e.target.value)} />

            <button type="submit">ADD</button>

        </form>
    )
}

export default AddTodo
