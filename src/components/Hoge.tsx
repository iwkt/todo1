import { Button, Code, Title } from '@mantine/core';

export const DemoButton = () => {
  const clickAlert = () => {
    alert('今日もいい日に決まっています！');
  };
  return (
    <>
      <Title order={3}>Greycliff CF or sans-serif title</Title>
      <Button onClick={clickAlert}>Verdana button</Button>
      <Code>Monaco, Courier Code</Code>
    </>
  );
};
