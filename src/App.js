import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/contact/Contact.js";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home.js";
import Navbar from "./components/navbar/Navbar";
import Quote from "./components/quote/Quote.js";
import Restaurant from "./components/restaurant/Restaurant.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
