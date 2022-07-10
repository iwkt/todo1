import { Button, Loader, MantineProvider, Paper, Text } from '@mantine/core';

export const Grobal = ()=>{
    return (
        <>
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
        </>
    )
}