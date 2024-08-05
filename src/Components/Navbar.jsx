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
                <div className="left nav_items "style={{marginLeft:'5%',fontSize:'2rem'}}>𝓟𝓸𝓻𝓽𝓯𝓸𝓵𝓲𝓸</div>
                <div className="right">
                    <a href="#home" className="text-white nav_items text-decoration-none">𝓗𝓸𝓶𝓮</a>
                    <a href="#skill" className="nav_items text-white  text-decoration-none">𝓢𝓴𝓲𝓵𝓵𝓼</a>
                    <a href="#project" className="nav_items text-white text-decoration-none">𝓟𝓻𝓸𝓳𝓮𝓬𝓽𝓼</a>
                    <a href="#contact" className="nav_items text-white text-decoration-none">𝓒𝓸𝓷𝓽𝓪𝓬𝓽</a>
                    
                </div>
            </div>

        </>
    )
}

export default Navbar
