import './About.css'

const About = () => {
  return (
    <>
        <div className="about">            
            <div >
                <img className="me" src="/pf1.jpg" alt="me"/>
                <h1 className="titule">ABOUT ME</h1>
                
                <p className="content">Hi, I&apos;m Luis Venegas a mexican computer systems engineer,web Designer and Front-end Developer, focused on creating clean, responsive web designs!</p>

                <div className="buttons">
                    <button className="btn-hover">HTML5</button>
                    <button className="btn-hover">JavaScript</button>
                    <button className="btn-hover">CSS3</button> 
                    <button className="btn-hover">ReactJS</button> 
                    <button className="btn-hover">Firebase</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default About