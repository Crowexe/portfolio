import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {

    return (
        <>
            <Navbar />
            
            <Parallax pages={3} >
                <ParallaxLayer 
                    offset={0} 
                    speed={0.7}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundImage: "URL('/BG-edit.png')",
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',

                    }}>
                    <Home />
                </ParallaxLayer>
                
                <ParallaxLayer
                    offset={1} 
                    speed={0.7}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <About />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2} 
                    speed={0.7}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Projects />
                </ParallaxLayer>

            </Parallax> 
        </>
    );
}

export default App;