import React from 'react';
import { useState } from 'react';
import { Space } from '@mantine/core';
// import { Space, Button, Loader, Paper, Text } from '@mantine/core';
import { ChileArea } from './components/ChileArea';

import './App.css';

function App() {
  console.log('App');
  const [text, setText] = useState(0);
  const [open, setOpen] = useState(false);
  const onChangeText = (e: any) => setText(e.target.value);

  const onClickOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="App">
      <Space h="md" />
      <input className="border border-gray-300" value={text} onChange={onChangeText} />
      <br />

      <button className="border border-gray-300 px-4 py-2 my-3" onClick={onClickOpen}>
        表示
      </button>
      <ChileArea open={open} />
      <button>こんにちは</button>
    </div>
  );
}

export default App;
