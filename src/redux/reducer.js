// Core
import { createReducer } from "@reduxjs/toolkit";
import { addTask,deleteTask ,toggleCompleted,setStatusFilter} from "./actions";
import { statusFilters } from "./constants";

const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];
// Only gets the tasks property updated
// Now the value of the state parameter will be an array of tasks


//=============== Before ========================
// export const tasksReducer = (state = tasksInitialState, action) => {
//   switch (action.type) {
//     case addTask.type:
//       return [...state, action.payload];
//     case deleteTask.type:
//       return state.filter(task => task.id !== action.payload);
//     case toggleCompleted.type:
//       return state.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return { ...task, completed: !task.completed };
//       });
//     default:
//       return state;
//   }
// };

//=============== After ========================
export const tasksReducer = createReducer(tasksInitialState, {
  [addTask]: (state, action) => {
    // return [...state, action.payload];
    state.push(action.payload);
  },
  [deleteTask]: (state, action) => {
    // return state.filter(task => task.id !== action.payload);
    const index = state.findIndex(task => task.id === action.payload);
    state.splice(index, 1);
  },
  [toggleCompleted]: (state, action) => {
    for (const task of state) {
      if (task.id === action.payload) {
        task.completed = !task.completed;
        break;
      }
    }
  },
});

const filtersInitialState = {
  status: statusFilters.all,
};
// Only gets the filters property updated
// Now the value of the state parameter will be the filters object


//=============== Before ========================
// export const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case setStatusFilter.type:
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

//=============== After ========================
export const filtersReducer = createReducer(filtersInitialState, {
  [setStatusFilter]: (state, action) => {
    // return {
    //   ...state,
    //   status: action.payload,
    // };
    state.status = action.payload;
  },
});
