import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline, Box, useTheme } from '@mui/material';
import { PaletteMode } from '@mui/material';
import { useEffect, useMemo } from 'react';
import * as React from 'react';
import './App.css'
import { Home } from './pages/Home/Home'
import { NotFound } from './pages/NotFound/NotFound'
import { Article } from './pages/Article/Article'
import { NavBar } from './components/NavBar/NavBar'
import { Footer } from './components/Footer/Footer'


export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function App() {
    const [mode, setMode] = React.useState<PaletteMode>('light');

    useEffect(() => {
        const localMode = localStorage.getItem('mode');
        if (localMode) {
            setMode(localMode as PaletteMode);
        } else {
            localStorage.setItem("mode", mode);
        }
    }, []);

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => {
                    localStorage.setItem("mode", prevMode === 'light' ? 'dark' : 'light');
                    return prevMode === 'light' ? 'dark' : 'light';
                })
            },
        }),
        [],
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                components: {
                    MuiCssBaseline: {
                        styleOverrides: {
                            body: {
                                transition: 'all 0.3s linear',
                            },
                        },
                    },
                },
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
                transitions: {
                    duration: {
                        shortest: 150,
                        shorter: 200,
                        short: 250,
                        standard: 300,
                        complex: 375,
                    },
                },
            }),

        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <NavBar />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="Article" element={<Article />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
                <Footer />
            </ThemeProvider>
        </ColorModeContext.Provider >
    )
}

export default App