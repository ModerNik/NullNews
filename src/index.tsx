import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { NavBar } from './components/NavBar/NavBar'
import { Footer } from './components/Footer/Footer'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <NavBar />
        <App />
        <Footer />
    </React.StrictMode>
)
