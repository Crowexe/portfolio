import { useState } from 'react';
import './Navbar.css'

const Navbar = () => {
    
    const [abrir, setAbrir] = useState(false);

    const manejarClick = () => {
      setAbrir(!abrir);
    };

    return (
        <>   
            <div className={`hamburguesa ${abrir ? "abrir" : ""}`} onClick={manejarClick}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className="navbar-conteiner">
                
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