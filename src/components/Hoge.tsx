import { Button, Code, Title, MantineProvider } from '@mantine/core';

export const DemoButton = () => {
  const clickAlert = () => {
    alert('今日もいい日に決まっています！');
  };
  return (
    <MantineProvider
      theme={{
        fontFamily: 'Verdana, sans-serif',
        fontFamilyMonospace: 'Monaco, Courier, monospace',
        headings: { fontFamily: 'Greycliff CF, sans-serif' },
      }}
    >
      <Title order={3}>Greycliff CF or sans-serif title</Title>
      <Button onClick={clickAlert}>Verdana button</Button>
      <Code>Monaco, Courier Code</Code>
    </MantineProvider>
  );
};
