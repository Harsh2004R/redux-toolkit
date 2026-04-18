import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
    task: [],
    status: "idle",
    error: null
}
export const fetchTaskData = createAsyncThunk(
    "taskList",
    async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos?_limit=10"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch tasks");
        }

        const data = await response.json();
        return data;
    }
);

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.task.push(action.payload);

        },
        toggleTask: (state, action) => {
            // console.log(action.payload);
            const find = state.task.find((el) => el.id === action.payload)
            if (find) {
                // console.log("found");
                find.completed = !find.completed;

            }

        },
        deleteTask: (state, action) => {
            state.task = state.task.filter(el => el.id !== action.payload)
        },
        clearTasks: (state) => {
            state.task = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTaskData.pending, (state, action) => {
            state.status = 'loading...'
            state.error = null;
        })
        builder.addCase(fetchTaskData.fulfilled, (state, action) => {
            state.status = "success",
                state.task = action.payload;
            state.error = null;
        })
        builder.addCase(fetchTaskData.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        });

    }
})

export const { addTask, toggleTask, deleteTask, clearTasks } = taskSlice.actions;
export default taskSlice.reducer;
