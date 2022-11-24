import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { useState, useEffect, createContext } from 'react';

import GlobalStyles from "./GlobalStyles";
import AppRoutes from "./Routes";
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { ForgotPassword } from './components/Login/ForgotPassword';
import { Contact } from "./pages/Contact/Contact";

import { useLocalStorage, useColorScheme } from "@mantine/hooks";
import { NotificationsProvider } from '@mantine/notifications';
import {
    Box,
    ColorScheme,
    ColorSchemeProvider,
    MantineProvider,
    MantineThemeOverride
} from '@mantine/core';


function App() {
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
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={MainTheme} withGlobalStyles withNormalizeCSS>
                <GlobalStyles />
                <NotificationsProvider>
                    <BrowserRouter>
                        <NavBar />
                        <AppRoutes />
                        <Footer />
                    </BrowserRouter>
                </NotificationsProvider>
            </MantineProvider>
        </ColorSchemeProvider>
    )
}

export default App