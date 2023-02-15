import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { useState, useEffect, createContext } from 'react';

import GlobalStyles from "./GlobalStyles";
import AppRoutes from "./Routes";
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'

import { useLocalStorage, useColorScheme } from "@mantine/hooks";
import { NotificationsProvider, showNotification } from '@mantine/notifications';
import {
    Box,
    ColorScheme,
    ColorSchemeProvider,
    MantineProvider,
    MantineThemeOverride
} from '@mantine/core';
import { IconAlertTriangle } from "@tabler/icons";

function App() {
    useEffect(() => {
        showNotification(
            {
                title: 'WORK IN PROGRESS',
                message: 'This site is still under construction. Most features aren`t working yet. You can contact the developers at the Contact page.',
                color: 'yellow',
                icon: <IconAlertTriangle />,
                autoClose: 5000,
            },
        )
    }, []);

    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'colorScheme',
        defaultValue: useColorScheme(),
        getInitialValueInEffect: true,
    });

    const toggleColorScheme = (value?: ColorScheme) => {
        setColorScheme(() => {
            localStorage.setItem("colorScheme", colorScheme === 'dark' ? 'light' : 'dark');
            return value || (colorScheme === 'dark' ? 'light' : 'dark');
        })
    }

    const MainTheme: MantineThemeOverride = {
        colorScheme: colorScheme,
        primaryColor: 'cyan',
        colors: {
            cyan: [
                '#E3FAFC',
                '#C5F6FA',
                '#99E9F2',
                '#66D9E8',
                '#3BC9DB',
                '#22B8CF',
                '#15AABF',
                '#1098AD',
                '#008C8C',
                '#0B7285',
            ],
        },
    };

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <MantineProvider theme={MainTheme} withGlobalStyles withNormalizeCSS>
                    <GlobalStyles />
                    <NotificationsProvider>
                        <BrowserRouter basename={`/NullNews`}>
                            <NavBar />
                            <Box mb={8} sx={{ maxWidth: '1440px', width: '100%' }} >
                                <AppRoutes />
                            </Box>
                            <Footer />
                        </BrowserRouter>
                    </NotificationsProvider>
                </MantineProvider>
            </ColorSchemeProvider>
        </Box>
    )
}

export default App