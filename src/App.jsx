import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ScrollToTop from "./helpers/ScrollToTop";

function App() {
  return (
    <div className="w-full">
      <Router>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/mfmPizza/"  element={<Home/>} />
          <Route path="/mfmPizza/menu"  element={<Menu/>} />
          <Route path="/mfmPizza/about"  element={<About/>} />
          <Route path="/mfmPizza/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
