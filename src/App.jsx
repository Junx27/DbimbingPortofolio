import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Portfolio from "./Pages/Portofolio";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/portfolio" Component={Portfolio} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </div>
  );
}
