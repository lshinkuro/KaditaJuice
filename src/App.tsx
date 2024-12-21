import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './contexts/CartContext';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { ArticleList } from "./pages/articles/ArticleList";
import { ArticleDetail } from "./pages/articles/ArticleDetail";
import Cookies from "js-cookie";
import { useEffect } from "react";

function App() {
    const token = Cookies.get("kadita-juice-id");
    const navigate = useNavigate();
    useEffect(() => {
        if (token) {
            navigate("/dashboard");
        }
    }, [token]);
    return (
        <CartProvider>
            <Toaster position="top-right" />
            <AppRoutes />
        </CartProvider>
    );
}

// Buat komponen terpisah untuk routing
function AppRoutes() {
    const token = Cookies.get("kadita-juice-id");

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<ArticleList />} />
            <Route path="/articles/:slug" element={<ArticleDetail />} />
            <Route path="/login" element={!token ? <Login /> : <Navigate to="/dashboard" />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} />
        </Routes>
    );
}

export default App;
