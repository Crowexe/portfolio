import Typewriter from "typewriter-effect";

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
            <img className="home-wave" src="/wave.png" alt="wave"/>
        </>                
    );
};

export default Home;