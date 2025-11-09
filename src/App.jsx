import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Research from "./components/Research";
import Footer from "./components/Footer";
import Lab from "./components/Lab";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/MID-lab" element={<Lab />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
