import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from '@reduxjs/toolkit';
import { fetchTaskData, toggleTask, addTask, deleteTask } from './Redux/Slices/tasksSlice';
function App() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const { task: list, status, error } = useSelector((state) => state.tasks);
  console.log(list)
  // console.log(list)
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTaskData())
    }
  }, [status, dispatch])


  if (status === "loading...") {
    return <h3>Loading.....</h3>
  }
  if (error === "failed") {
    return <h2 style={{ color: "red" }}>Error: {error}</h2>;
  }

  return (
    <div>
      <input type="text" placeholder='enter new yask' onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => dispatch(addTask({ id: nanoid(), title: input, completed: false, userId: 5 }))}>Add</button>
      {
        list?.map((el) => (
          <div style={{ marginTop: "5px", padding: "10px", borderRadius: "15px", marginBottom: "5px", border: "0.5px solid #999" }} key={el.id}>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <p>{el.title}</p>

              </div>
              <div>
                {/* <p style={{ color: `${el.completed} ? "green": "red"` }}>Completed :  {el.completed}</p> */}
                <p style={{ color: el.completed ? "green" : "red" }}>
                  Status: {el.completed ? "Done" : "Pending"}
                </p>
                <input checked={el.completed} onChange={() => dispatch(toggleTask(el.id))} style={{ width: "50px" }} type="checkBox" ></input>
                <button onClick={() => dispatch(deleteTask(el.id))} style={{ backgroundColor: "red", paddingX: "10px", borderRadius: "5px" }}>Delete</button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}
export default App
