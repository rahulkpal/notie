import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../features/todoSlice';

import Todo from './Todo';

const ManageTodo = () => {
  const todoList = useSelector(state => state.todo);
  const dispatch = useDispatch();
  const markComplete = (id) => {
    dispatch(update(id));
  }

  return (
    <>
      {todoList.map(todo => (
        <div key={todo.id}>
          <Todo todo={todo} />
          <button onClick={() => markComplete(todo.id)}>{todo.isComplete ? 'Not Watched' : 'Watched'}</button>
        </div>
      ))}
    </>
  )
};

export default ManageTodo;