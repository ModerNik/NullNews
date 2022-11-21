import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { PaletteMode } from '@mui/material';

export const themeSettings = (mode) => ({
    palette: {
        mode: mode,
        ...(mode === 'dark'
            ? {
                primary: {
                    main: '#008C8C',
                },
                secondary: {
                    main: '#F5CB5C',
                },
                neutral: {
                    main: '#D9D9D9',
                },
                background: {
                    default: '#353535',
                },
            }
            : {
                primary: {
                    main: '#008C8C',
                },
                secondary: {
                    main: '#F5CB5C',
                },
                neutral: {
                    main: '#D9D9D9',
                },
                background: {
                    default: '#FFFFFF',
                },
            }),
    },
    typography: {
        fontFamily: ["Helvetica", 'sans-serif'].join(','),
        fontSize: 12,
        h1: {
            fontFamily: ["Helvetica", 'sans-serif'].join(','),
            fontSize: 40,
        },
        h2: {
            fontFamily: ["Helvetica", 'sans-serif'].join(','),
            fontSize: 32,
        },
        h3: {
            fontFamily: ["Helvetica", 'sans-serif'].join(','),
            fontSize: 24,
        },
        h4: {
            fontFamily: ["Helvetica", 'sans-serif'].join(','),
            fontSize: 20,
        },
        h5: {
            fontFamily: ["Helvetica", 'sans-serif'].join(','),
            fontSize: 16,
        },
        h6: {
            fontFamily: ["Helvetica", 'sans-serif'].join(','),
            fontSize: 14,
        },
    },
});

export const ColorModeContext = createContext({
    toggleColorMode: () => { },
});

export const useMode = () => {
    const [mode, setMode] = useState<PaletteMode>('dark');

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
};