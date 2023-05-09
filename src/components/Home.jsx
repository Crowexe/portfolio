import React from 'react';
import Typewriter from "typewriter-effect";
import background from "/BG-edit.png";
import Wave from './Wave';
import './Home.css'

const Home = () => {

    return (
        <>
            <div className="home">
                <h1 className="name-title">Luis<span> / </span>Venegas</h1>
                <br/>
                <span  className="typeWrite"><Typewriter 
                    onInit={(typewriter)=> {

                    typewriter
                    
                    .typeString("FRONT - END DEVELOPER")
                    .start()
                    }}
                />
                </span>
                
            </div>
            <div className="home-wave">
                <Wave />
            </div>
        </>
    );
};

export default Home;