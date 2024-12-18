import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
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
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={!token ? <Login /> : <Navigate to="/dashboard" />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} />
        </Routes>
    );
}

export default App;
