import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/about.js";
import ContactForm from "./pages/ContactForm/ContactForm.js";
import Clubs from "./pages/Clubs/Clubs.jsx";

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
    </Router>
  );
}

export default App;
