
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Registration from "./components/Registration";
import Contact from "./components/Contact";
import About from "./components/About";
import Recipes from "./components/Recipes";
import Login from "./components/Login";


function App() {
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen">
        <main className="mb-auto">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
