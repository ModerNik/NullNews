import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import { Home } from './pages/Home/Home'
import { NotFound } from './pages/NotFound/NotFound'
import { Article } from './pages/Article/Article'
import { ThemeProvider, createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
      status: {
        danger: string;
      };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
      status?: {
        danger?: string;
      };
    }
  }
  

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Article" element={<Article />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
