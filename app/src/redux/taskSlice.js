// src/redux/taskSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    list: [],
    filter: 'all' // all | done | notDone
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: nanoid(),
        description: action.payload,
        isDone: false
      };
      state.list.push(newTask);
    },
    toggleTask: (state, action) => {
      const task = state.list.find(t => t.id === action.payload);
      if (task) task.isDone = !task.isDone;
    },
    editTask: (state, action) => {
      const { id, newDesc } = action.payload;
      const task = state.list.find(t => t.id === id);
      if (task) task.description = newDesc;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
});

export const { addTask, toggleTask, editTask, setFilter } = taskSlice.actions;
export default taskSlice.reducer;
