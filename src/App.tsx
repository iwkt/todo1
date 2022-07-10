import React from 'react';
import { Space, Button, Loader, MantineProvider, Paper, Text, ThemeIcon } from '@mantine/core';

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
          colors: {
            pink: [
            "#FF6B6B",
            "#22B8CF"
          ]
          },
        }}
      >
        <Paper>
          <Text>This is a simple text Tag</Text>
          <Text>This is a simple text Tagajhfaoe opje</Text>
          <Button className="text-pink-200">Hello World</Button>
          <Button>Hello World</Button>
        </Paper>
        <Loader></Loader>
      </MantineProvider>
      <Todo />
      <DemoButton />
      <Text>First line</Text>
      <Space h="lg" />
      <Text>Second line</Text>
    </div>
  );
}

export default App;
