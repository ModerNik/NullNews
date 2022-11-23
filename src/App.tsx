import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { useState, useEffect, createContext } from 'react';
import { Home } from './pages/Home/Home'
import { NotFound } from './pages/NotFound/NotFound'
import { NavBar } from './components/NavBar/NavBar'
import { Footer } from './components/Footer'
import { Login } from './components/Login/Login'
import { useLocalStorage, useColorScheme } from "@mantine/hooks";
import {
    ColorScheme,
    ColorSchemeProvider,
    MantineProvider,
    MantineThemeOverride
} from '@mantine/core';

// import MainTheme from './theme';
import { ForgotPassword } from './components/Login/ForgotPassword';
// export const ColorSchemeContext = createContext({} as ColorScheme);

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
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="login" element={<Login />} />
                        <Route path="forgot" element={<ForgotPassword />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Outlet />
                    <Footer />
                </BrowserRouter>
            </MantineProvider>
        </ColorSchemeProvider>
    )
}

export default App