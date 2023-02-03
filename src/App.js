import "./App.css";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Header from "./Components/Nav";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Hero />
        <Routes>
          <Route path="/Skills" element={<Skills />}></Route>
          <Route path="/Project" element={<Project />}></Route>
          <Route path="/Contacts" element={<Contacts />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
