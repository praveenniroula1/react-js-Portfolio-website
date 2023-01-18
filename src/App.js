import "./App.css";
import Hero from "./Components/Hero";
import Header from "./Components/Nav";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
