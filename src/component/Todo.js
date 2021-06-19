import React from 'react';

const Todo = ({ todo }) => <li>{todo.isComplete ? <del>{todo.listItem}</del> : todo.listItem}</li>;

export default Todo;