import React from 'react';
import { Todo } from './components/Todo';
import { DemoButton } from './components/Hoge';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="p-10 text-6xl text-blue-500">Hello Japan</h1>
      <Todo />
      <DemoButton />
    </div>
  );
}

export default App;
