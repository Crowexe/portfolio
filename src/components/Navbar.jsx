import React from 'react'
import './Navbar.css'

const Navbar = () => {

  return (
    <>        
        <nav className='navbar-conteiner'>
            <ul className='navbar-list'>
                <li><a className='navbar-item' href="#Home">HOME</a></li>
                <li><a className='navbar-item' href="#">ABOUT</a></li>
                <li><a className='navbar-item' href="#">PORTFOLIO</a></li>
                <li><a className='navbar-item' href="#">CONTACT</a></li>
            </ul>
        </nav>
    </>
  )
};

export default Navbar