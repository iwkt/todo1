import React from 'react';
import { Button, Loader, MantineProvider, Paper, Text } from '@mantine/core';

import { Todo } from './components/Todo';
import { DemoButton } from './components/Hoge';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="p-10 text-6xl text-blue-500">Hello Japan</h1>
      <MantineProvider
        theme={{
          fontFamily: 'Open Sans',
          colorScheme: 'dark',
          fontSizes: { md: 60 },
        }}
      >
        <Paper>
          <Text>This is a simple text Tag</Text>
          <Text>This is a simple text Tagajhfaoe opje</Text>
        </Paper>
        <Button>Hello World</Button>
        <Button>Hello World</Button>
        <Loader></Loader>
      </MantineProvider>
      <Todo />
      <DemoButton />
    </div>
  );
}

export default App;
