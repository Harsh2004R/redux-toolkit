import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: nanoid(), title: "Learn Redux", status: false }]
}

export const TodoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addNewTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                title: action.payload,
                // state: action.payload,
            }
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((ele) => {
                return ele.id !== action.payload;
            })
        },
        updateTodo: (state, action) => {
            const { id, title } = action.payload;
            const existingTodo = state.todos.find((todo) => {
                return todo.id === id;
            })
            if (existingTodo) {
                existingTodo.title = title;
            }


        }
    }

})


export const { addNewTodo, removeTodo, updateTodo } = TodoSlice.actions;
export default TodoSlice.reducer;