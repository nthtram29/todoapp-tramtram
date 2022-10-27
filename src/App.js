import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar/Navbar";


const App=()=> {
  return (
    <div className="app">
      <Router>
        <div className="menu">
      <Navbar />
      </div>
      <div className="content_app">
      <Routes>
        <Route path="/" element={ <Welcome/>} >
        
      </Route>
      </Routes> 
      <Routes>
          <Route path="/home" element={<Home/>} />
      </Routes>
        <Routes>
        <Route path="/about" element={<About/>} >
        </Route>
        </Routes>
      <Routes>
      <Route path="/profile" element={<Profile/>} >
      
    </Route>
    </Routes>
    </div>
      </Router>
      </div>
    
  );
};

export default App;
