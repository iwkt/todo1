import React from 'react';
import { Space, Button, Loader, Paper, Text } from '@mantine/core';

import { Todo } from './components/Todo';
import { DemoButton } from './components/Hoge';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="p-10 text-6xl text-blue-500">Hello Japan</h1>
      <Paper>
        <Text>This is a simple text Tag</Text>
        <Text>This is a simple text Tagajhfaoe opje</Text>
        <Button className="text-pink-200">Hello World</Button>
        <Button>Hello World</Button>
      </Paper>
      <Loader></Loader>
      <Todo />
      <DemoButton />
      <Text>First line</Text>
      <Space h="lg" />
      <Text>Second line</Text>
    </div>
  );
}

export default App;
