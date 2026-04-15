import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../Redux/Features/TodoSlice';



function Todos() {
    const [edit, setEdit] = useState("");
    const dispatch = useDispatch();
    const Todos = useSelector((state) => state.todos)



    return (
        <div style={{ marginTop: "20px", border: "1px solid grey", padding: "30px", borderRadius: "80px" }}>
            {Todos.map((el) => (
                <div key={el.id} style={{ borderBottom: "1px solid coral", marginTop: "10px", marginBottom: "10px", }}>
                    <h4>Title</h4>
                    <p>{el.title}</p>
                    <button onClick={() => dispatch(removeTodo(el.id))} style={{ margin: "10px" }}>X</button>
                    <input type="text" onChange={(e) => setEdit(e.target.value)} />
                    <button onClick={() => {
                        if (edit.trim() !== "") {
                            dispatch(updateTodo({ id: el.id, title: edit }));
                            setEdit(""); // Clear input after update
                        }
                    }}>
                        Update
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Todos
