import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Componant/Pages/Home/Home";
import About from "./Componant/Pages/About/About";
import Projects from "./Componant/Pages/Projects/Projects";
import NavigationBar from "./Componant/Pages/Navbar/NavigationBar";
import Preloader from "./Componant/PreLoader/Preloader";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      {/* <Preloader/> */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
