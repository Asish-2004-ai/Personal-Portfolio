import React, { useEffect, useRef } from 'react'
import hero from './data/hero.json'
import Typed from 'typed.js'
import pdf from '../pdf/pdf.pdf'
import { BiFontSize } from 'react-icons/bi'




const Home = () => {
  const typedRef = useRef(null);
  useEffect(()=>{
    const options = {
    strings:["ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴍʏ ᴘʀᴏғɪʟᴇ","Hi, I am Ａｓｈｉｓｈ","Full Sᴛᴀᴄᴋ Web ᴅᴇᴠᴇʟᴏᴘᴇʀ","Software ᴅᴇᴠᴇʟᴏᴘᴇʀ"],
    // style: {BiFontSize},
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
            ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴍʏ ᴘʀᴏғɪʟᴇ
          </h1>
          <a href={pdf}><button className='btn btn-outline-warning'>ᴅᴏᴡɴʟᴏᴀᴅ ʀᴇsᴜᴍᴇ</button></a>
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
