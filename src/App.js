import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./scss/style.css";
import { ToastContainer } from "react-toast";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer delay={3000} position="top-right" />
    </div>
  );
}

export default App;
