import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/about";
import ContactForm from "./pages/ContactForm/ContactForm.js";
import Clubs from "./pages/Clubs/Clubs.jsx";
import Footer from "./components/Footer/Footer.js";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactForm />} />
        <Route path="/clubs" element={<Clubs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
