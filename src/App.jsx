import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";
import Navbar from "./Component/Header/Navbar";
import Footer from "./Component/Footer/Footer";
import Home from "./Pages/Home";
import About from "./Component/AboutSection/AboutSection";
import Contact from "./Component/Contact/ContactSection";
import FloralCategories from "./Component/FloralCategories/FloralCategories";
import SignatureScents from "./Component/SignatureScents/SignatureScents";



function App() {
  return (
    <BrowserRouter>

      <Navbar />
    




      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/floral-categories" element={<FloralCategories />} />
        <Route path="/signature-scents" element={<SignatureScents />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

    </BrowserRouter>

  );
}

export default App;

