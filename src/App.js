import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./conpacts/Sidebar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Sidebar>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/homepage" element={<Homepage />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Sidebar>
        </BrowserRouter>
      </div>
    </div>
  );
}
