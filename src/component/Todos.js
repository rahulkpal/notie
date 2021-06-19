import React from 'react';
import { useSelector } from 'react-redux';

import Todo from './Todo';

const Todos = () => {
  const todoList = useSelector(state => state.todo);
  return todoList.map(todo => <Todo key={todo.id} todo={todo} />)
};

export default Todos;