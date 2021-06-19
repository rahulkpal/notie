import './App.css';
import React from 'react';

import Header from './component/Header';
import Count from './component/Count';
import Todos from './component/Todos';
import AddTodoForm from './component/AddTodoForm';
import ManageTodo from './component/ManageTodo';

function App() {
  return (
    <div className="App">
      <Header heading='Movies List:' />
      <Todos />
      <AddTodoForm />
      <br />
      <br />
      <Header heading='View Movies List:' />
      <Count />
      <ManageTodo />
    </div>
  );
}

export default App;
