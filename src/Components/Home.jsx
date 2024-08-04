import React, { useEffect, useRef } from 'react'
import hero from './data/hero.json'
import Typed from 'typed.js'




const Home = () => {
  const typedRef = useRef(null);
  useEffect(()=>{
    const options = {
    strings:["WELCOME TO MY PROFILE","Hi,I am Asish","I am a Software Devloper","I am a Web Devloper"],
    typeSpeed:50,
    backSpeed:50,
    loop:true,
    };

    const typed = new Typed(typedRef.current,options);
    return()=>{
      typed.destroy();
    };
},[])


  return (
    <>
      <div className="container home" id='home'>
        
        <div className="left"
          data-aos="fade-up-right"
          data-aos-duration="2000"
        >
          <h1 ref={typedRef}
           
          >
          </h1>
          <button className='btn btn-outline-warning'>Download Resume</button>
        </div>
        <div className="right">
          <div className="img"
          data-aos="fade-up-left"
          data-aos-duration="2000"
          >
            <img src={`/Assest/${hero.imgsrc}`} alt="" />
          </div>
        </div>
      </div>
      
    </>
  )

}
export default Home
