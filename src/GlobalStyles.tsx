import { Global } from '@mantine/core';

export default function GlobalStyles() {
    return (
        <Global
            styles={(theme) => ({
                '*, *::before, *::after': {
                    boxSizing: 'border-box',
                },

                body: {
                },
            })}
        />
    );
}