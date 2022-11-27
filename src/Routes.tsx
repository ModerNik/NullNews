import { Route, Routes } from "react-router-dom";
import { Home } from './pages/Home/Home'
import { NotFound } from './pages/NotFound/NotFound'
import { Login } from './components/Login/Login'
import { ForgotPassword } from "./components/Login/ForgotPassword";
import { Contact } from "./pages/Contact/Contact";

export default function AppRoutes() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}