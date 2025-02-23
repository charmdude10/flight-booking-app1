import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Dashboard/Dashboard";
import ForgetPassword from "./pages/ForgetPassword";
import ResetLink from "./pages/ResetLink";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import FlightSearchCard from "./pages/FlightSearchCard";



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ToastContainer />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/reset-password/:token" element={<ResetLink />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/flightsearchcard" element={<FlightSearchCard />} />
          
          <Route
            path="/email-verification"
            element={<EmailVerificationPage />}
          />

          {/* we catch all routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
