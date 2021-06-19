import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add(state, action) {
      const prevId = state.length ? +state[state.length - 1].id : 0;
      const newTodo = {
        id: `${prevId + 1}`,
        listItem: action.payload,
        isComplete: false,
      };
      state.push(newTodo);
    },
    update(state, action) {
      return state.map(todo =>
        todo.id === action.payload ?
          ({ ...todo, isComplete: !todo.isComplete }) : todo);
    },
  },
});

export const { add, update } = todoSlice.actions;
export default todoSlice.reducer;