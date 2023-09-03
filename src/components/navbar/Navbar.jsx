import React from 'react'
import {Link} from 'react-scroll'
import './navbar.css'
const Navbar = () => {
  return (

         <nav className="navbar">
        <Link className='nav-brand'>LOGO</Link>
        <ul className="navbar-nav">
            <Link activeClass='active' to='intro' spy={true} smooth={true} duration={500} offset={-100} className='nav-link'>HOME</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} duration={500} offset={-70} className='nav-link'>ABOUT</Link>
            <Link activeClass='active' to='services' spy={true} smooth={true} duration={500} offset={-65 } className='nav-link'>SERVICES</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} duration={500} offset={-65} className='nav-link'>CONTACT US</Link>
        </ul>
        
        <a href="https://github.com/RATATUWI"><button className="discordBtn">GITHUB</button></a>
    </nav>

  )
}

export default Navbar