import React from 'react'

const Navbar = () => {

  return (
    <nav className='fixed top-0 right-0'>
        <div className='w-250 mx-auto text-center'>
            <ul className='flex space-x-4 mt-15 p-5 text-center'>
                <li><a className='text-white text-xl no-underline mx-auto border-b-2 border-transparent transition-all duration-600 ease-in-out hover:text-red-500 hover:border-white' href="#Home">HOME</a></li>
                <li><a className='text-white text-xl no-underline mx-auto border-b-2 border-transparent transition-all duration-600 ease-in-out hover:text-red-500 hover:border-white' href="#">ABOUT</a></li>
                <li><a className='text-white text-xl no-underline mx-auto border-b-2 border-transparent transition-all duration-600 ease-in-out hover:text-red-500 hover:border-white' href="#">PORTFOLIO</a></li>
                <li><a className='text-white text-xl no-underline mx-auto border-b-2 border-transparent transition-all duration-600 ease-in-out hover:text-red-500 hover:border-white' href="#">CONTACT</a></li>
            </ul>
        </div>
    </nav>
  )
};

export default Navbar