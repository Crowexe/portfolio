import React from 'react'

const Sidebar = () => {
    return (
        <>
            <div className='h-full z-500 fixed bg-white active:block'>
                <ul id='myMenu'>
                    <li data-menuanchor="firstPage" className="active"><a href="#home">HOME</a></li>
                    <li data-menuanchor="secondPage"><a href="#about">ABOUT</a></li>
                    <li data-menuanchor="thirdPage"><a href="#portfolio">PORTFOLIO</a></li>
                    <li data-menuanchor="fourthPage"><a href="#contact">CONTACT</a></li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar