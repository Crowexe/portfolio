import { useRef } from 'react';
import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Home from './components/Home';
import About from './components/About';


const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;


function App() {

    const parallax = useRef(null)

    return (
        <>
            <div style={{ width: '100%', height: '100%', background: '#253237' }}>
                <Parallax ref={parallax} pages={4}>
                

                    <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} >
                        <img src={'/wave.png'} style={{ position: 'absolute', bottom: '0', width: '100%', marginBottom:'-18rem'}} />
                    </ParallaxLayer>
                    
                    <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} >
                        <img src={'/wave.png'} style={{ position: 'absolute', bottom: '0', width: '100%', marginBottom:'-18rem'}} />
                    </ParallaxLayer>

                    <ParallaxLayer offset={4} speed={1} style={{ backgroundColor: '#805E73' }} >
                        <img src={'/wave.png'} style={{ position: 'absolute', bottom: '0', width: '100%', marginBottom:'-18rem'}} />
                    </ParallaxLayer>

                    <ParallaxLayer
                    offset={0}
                    speed={0}
                    factor={3}
                    style={{
                        height: '100vh',
                        backgroundImage: "url('https://i.imgur.com/nU5yj0X.png')",
                        backgroundSize: 'cover',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column'
                    }}
                    >
                        <img src={'/wave.png'} style={{ position: 'absolute', bottom: '0', width: '100%', marginBottom:'-18rem'}} />
                    </ParallaxLayer>

                    <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
              
                    </ParallaxLayer>

                    <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                    </ParallaxLayer>

                    <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                    </ParallaxLayer>

                    <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
    
                    </ParallaxLayer>

                    <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                    </ParallaxLayer>

                    <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
                    </ParallaxLayer>
                    
                    <ParallaxLayer offset={3.6} speed={0.4} style={{ opacity: 0.6 }}>
                    <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
                    </ParallaxLayer>

                    <ParallaxLayer
                    offset={2.5}
                    speed={-0.4}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'none',
                    }}>
       
                    </ParallaxLayer>

                    <ParallaxLayer
                    offset={3.5}
                    speed={-0.4}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'none',
                    }}>
       
                    </ParallaxLayer>

                    <ParallaxLayer
                    offset={2}
                    speed={-0.3}
                    style={{
                        backgroundSize: '80%',
                        backgroundPosition: 'center',
                        backgroundImage: url('clients', true),
                    }}
                    />

                    <ParallaxLayer
                    offset={0}
                    speed={0.1}
                    onClick={() => parallax.current.scrollTo(1)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Home/>
                    </ParallaxLayer>

                    <ParallaxLayer
                    offset={1}
                    speed={0.1}
                    onClick={() => parallax.current.scrollTo(2)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <About/>
                    </ParallaxLayer>

                    <ParallaxLayer
                    offset={2}
                    speed={-0}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onClick={() => parallax.current.scrollTo(3)}>
                    <img src={url('clients-main')} style={{ width: '40%' }} />
                    </ParallaxLayer>

                    <ParallaxLayer
                    offset={3}
                    speed={-0}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onClick={() => parallax.current.scrollTo(0)}>
                    <img src={url('clients-main')} style={{ width: '40%' }} />
                    </ParallaxLayer>
                </Parallax>
                </div>
        </>
    );
}

export default App;