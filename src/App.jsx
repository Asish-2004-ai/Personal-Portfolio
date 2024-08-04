// import "../src/matter.js"
import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

// import useScript from "@custom-react-hooks/use-script";



const App = () =>{
 useEffect(()=>{
  Aos.init();
  },[]);
  return(
    <>
    <div style={{height:'100%',backgroundColor:'#111',color:'white'}}>
    <Navbar />
    <div className="container">
      <Home />
      <Skills />
      <Project />
      <Contact />
    </div>
    </div>
   
        </>
  )
}

export default App;
