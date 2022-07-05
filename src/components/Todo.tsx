// import { useState } from 'react';
import { Input, ActionIcon, Button } from '@mantine/core';
import { Adjustments, BrandTwitter } from 'tabler-icons-react';

export const Todo = () => {
  // const [value, setValue] = useState('');

  return (
    <>
      <Input icon={<BrandTwitter />} placeholder="Your email" />
      <Button>Push</Button>
      <ActionIcon>
        <Adjustments />
      </ActionIcon>
    </>
  );
};
