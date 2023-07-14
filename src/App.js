import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import ServicesPage from "./Pages/ServicesPage";
import LoginDash from "./Dashboard/LoginDash";
import Protected from "./Protected";
import MainDash from "./Dashboard/MainDash";

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} /> 
    <Route path="/about" element={<AboutUs />} /> 
    <Route path="/services" element={<ServicesPage />} /> 
    <Route path="/contact" element={<ContactUs />} /> 
    <Route path="/admin" element={<Protected Component= { LoginDash } />}/> 
    <Route path="/Dashboard" element={<Protected Component= { MainDash } />}/> 
    </Routes>
    </>
  );
}

export default App;
