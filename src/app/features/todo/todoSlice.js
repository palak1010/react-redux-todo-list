import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  todos: [{ id: 1, text: "Learn HTML", status: "Todo" }],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.text,
        status: action.payload.status,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload.id);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, text: action.payload.text };
        } else {
          return todo;
        }
      });
    },
    updateStatus: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, status: "Done" };
        } else {
          return todo;
        }
      });
    },
  },
});

export const { addTodo, removeTodo, updateStatus, updateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
// this needs to weired up with the store
