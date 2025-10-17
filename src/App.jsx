import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Component/Header/Navbar";
import Footer from "./Component/Footer/Footer";
import Home from "./Pages/Home";
import About from "./Component/AboutSection/AboutSection";
import Contact from "./Component/Contact/ContactSection";
import FloralCategories from "./Component/FloralCategories/FloralCategories";
import SignatureScents from "./Component/SignatureScents/SignatureScents";

// Layout for valid pages
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Renders the current route component */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes using Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/floral-categories" element={<FloralCategories />} />
          <Route path="/signature-scents" element={<SignatureScents />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Catch-all 404 route without Navbar/Footer */}
        <Route path="*" element={<div className="text-center py-20 text-2xl">Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

