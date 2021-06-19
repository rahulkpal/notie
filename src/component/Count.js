import React from 'react';
import { useSelector } from 'react-redux';

const Count = () => {
  const todoList = useSelector(state => state.todo)
  return (
    <p>Total: {todoList.length}</p>
  )
};

export default Count;