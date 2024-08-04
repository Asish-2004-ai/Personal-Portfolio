import React from 'react'



const Navbar = () => {
    return (
        <>
            <div className="container nav_bar"
             style={{
                position: 'sticky',
                top: 0,
                zIndex: 1000, // Ensure it stays above other content
                backgroundColor: '#rgb(11, 26, 51)', // Optional: background color for visibility
                backdropFilter:'blur(5px)'
            }}
            data-aos="fade-down"
            data-aos-duration="2000"
            >
                <div className="left nav_items "style={{marginLeft:'5%',fontSize:'2rem'}}>Portfolio</div>
                <div className="right">
                    <a href="#home" className="text-white nav_items text-decoration-none">Home</a>
                    <a href="#skill" className="nav_items text-white  text-decoration-none">Skills</a>
                    <a href="#project" className="nav_items text-white text-decoration-none">Projects</a>
                    <a href="#contact" className="nav_items text-white text-decoration-none">Contact</a>
                    
                </div>
            </div>

        </>
    )
}

export default Navbar
