// Core
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addTask, deleteTask, fetchTasks, toggleCompleted } from './operations';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const tasksSlice = createSlice({
//   name: 'tasks',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: {
//     [fetchTasks.pending]: handlePending,
//     [addTask.pending]: handlePending,
//     [deleteTask.pending]: handlePending,
//     [toggleCompleted.pending]: handlePending,

//     [fetchTasks.rejected]: handleRejected,
//     [addTask.rejected]: handleRejected,
//     [deleteTask.rejected]: handleRejected,
//     [toggleCompleted.rejected]: handleRejected,

//     [fetchTasks.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     [addTask.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(action.payload);
//     },
//     [deleteTask.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(
//         task => task.id === action.payload.id
//       );
//       state.items.splice(index, 1);
//     },
//     [toggleCompleted.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(
//         task => task.id === action.payload.id
//       );
//       state.items.splice(index, 1, action.payload);
//     },
//   },
// });

// export const tasksReducer = tasksSlice.reducer;

const extraActions = [fetchTasks, addTask, deleteTask, toggleCompleted];

const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const fetchTasksFulfilledReducer = (state, action) => {
  state.items = action.payload;
};

const addTaskFulfilledReducer = (state, action) => {
  state.items.push(action.payload);
};

const deleteTaskFulfilledReducer = (state, action) => {
  const index = state.items.findIndex(task => task.id === action.payload.id);
  state.items.splice(index, 1);
};

const toggleCompletedFulfilledReducer = (state, action) => {
  const index = state.items.findIndex(task => task.id === action.payload.id);
  state.items.splice(index, 1, action.payload);
};

const anyPendingReducer = state => {
  state.isLoading = true;
};

const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const anyFulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchTasks.fulfilled, fetchTasksFulfilledReducer)
      .addCase(addTask.fulfilled, addTaskFulfilledReducer)
      .addCase(deleteTask.fulfilled, deleteTaskFulfilledReducer)
      .addCase(toggleCompleted.fulfilled, toggleCompletedFulfilledReducer)
      .addMatcher(getActions('pending'), anyPendingReducer)
      .addMatcher(getActions('rejected'), anyRejectedReducer)
      .addMatcher(getActions('fulfilled'), anyFulfilledReducer),
});

export const tasksReducer = tasksSlice.reducer;
