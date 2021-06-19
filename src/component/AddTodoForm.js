import React from 'react';

import { useDispatch } from 'react-redux';
import { add } from '../features/todoSlice';

const AddTodoForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(add(form.todoItem.value));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="todoItem" />
      <button type="submit">Add</button>
    </form>
  )
};

export default AddTodoForm