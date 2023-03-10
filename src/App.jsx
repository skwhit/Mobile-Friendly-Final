import "./App.css";
import Projects from "./components/projects/Projects";
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";
import { Routes, Route } from "react-router-dom";

function App() {

  
  return (
    <div className="app">
      <header>
        <Navbar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/skills" element={<Skills/>}/>
        </Routes>
        
        {/* <ProjectList/> */}
      </main>
    </div>
  );
}

export default App;
