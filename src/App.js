import { Route, Routes } from "react-router-dom"
import Nav from "./Components/Nav";
import Home from './Components/Home'
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import './index.css'


function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
