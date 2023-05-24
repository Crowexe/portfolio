import './Navbar.css';


const Navbar = () => {

    return (
        <>   
            <nav className="navbar-conteiner">
                
                <ul className='navbar-list'>
                    <li><a className='navbar-item' href="https://www.linkedin.com/in/venevil/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"/></a></li>
                    <li><a className='navbar-item' href="https://github.com/Crowexe" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"/></a></li>
                    <li><a className='navbar-item' href="https://www.instagram.com/crow.exe_/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"/></a></li>
                    <li><a className='navbar-item' href="https://www.twitch.tv/onicrow_" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitch"/></a></li>
                </ul>
  
            </nav>
        </>
    )
};

export default Navbar