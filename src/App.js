import "./App.css";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Header from "./Components/Nav";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import { Switch, Redirect, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Skills />
      <Project />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
