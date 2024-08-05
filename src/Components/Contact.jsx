import React from 'react'
import { CiFacebook } from 'react-icons/ci'
import { CiLinkedin } from 'react-icons/ci'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaGitSquare } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'


const Contact = () => {
  return (
    <>
      <div className="container Contact" id='contact'>
        <h3>𝑪𝒐𝒏𝒕𝒂𝒄𝒕</h3>
        <div className="contact-icons"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <a href='https://www.facebook.com/profile.php?id=100083618446814' className="items"><CiFacebook className='icons'/></a>
          <a href='https://www.linkedin.com/in/asishdalabehera' className="items"><CiLinkedin className='icons'/></a>
          <a href='https://x.com/home' className="items"><FaSquareXTwitter className='icons'/></a>
          <a href='https://github.com/Asish-2004-ai' className="items"><FaGitSquare className='icons'/></a>
          <a href='mailto:asishdalabehera375@gmail.com' className="items"><SiGmail className='icons'/></a>

          </div>      
      </div>
    </>
  )
}

export default Contact
