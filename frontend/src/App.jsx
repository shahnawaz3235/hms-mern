import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useContext, useEffect } from "react";
import { Context } from "./main";
import axios from "axios";
import './index.css'
function App() {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  const fetchUser = async () => {
    try {
      const responce = await axios.get("https://hms-mern-backend.vercel.app/api/v1/user/patient/me", {
        withCredentials: true,
      });
      setIsAuthenticated(true);
      setUser(responce.data.user);
    } catch (error) {
      setIsAuthenticated(false);
      setUser({});
    }
  };
  
  useEffect(() => {
    fetchUser();
  }, [isAuthenticated]);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <ToastContainer position="top-center" />
        <Footer />
      </Router>
    </>
  );
}

export default App;
