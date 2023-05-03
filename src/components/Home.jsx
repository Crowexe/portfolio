import React from 'react';
import Typewriter from "typewriter-effect";
import background from "/BG-edit.png";

const Home = () => {


  return (
    <div
      className="h-screen bg-cover bg-center bg-gray-500 bg-opacity-30 flex items-center justify-center flex-col"
      style={{ backgroundImage: `url(${background})` }}
    >
        <h1 className="text-white text-6xl z-10 font-black uppercase">Luis<span className="text-red-800"> / </span>Venegas</h1>
        <br/>
        <p  className="text-white text-3xl z-10 uppercase"><Typewriter 
           
            onInit={(typewriter)=> {

            typewriter
            
            .typeString("FRONT - END DEVELOPER")
            .start()
            }}
        />
        </p>
    </div>
  );
};

export default Home;