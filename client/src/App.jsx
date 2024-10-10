import { Button } from "@nextui-org/react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <div className="flex flex-col justify-between min-h-screen">
        <main className="mb-auto">
          <Navigation />
          <h1 className="text-3xl font-bold underline">
            This is my broilerplate
          </h1>
          <Button>Check if next ui is working </Button>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default App;
