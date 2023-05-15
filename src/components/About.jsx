import './About.css'

const About = () => {
  return (
    <>
        <div className="conteiner">
            <div >
                <h1 className="titule">ABOUT ME</h1>
                <p className="content">Hi, I&apos;m Luis Venegas a mexican computational sistems engineer,web Designer and Front-end Developer, focused on creating clean, responsive web designs!</p>

                <div className='skills'>
                    <div className="text-slate-100">
                        <div className="skillbar-title bg-red-500"><span>HTML5</span></div>
                        <div className="skillbar-bar bg-red-500"></div>
                        <div className="skill-bar-percent">90%</div>
                    </div> 

                    <div className="text-slate-100" data-percent="80%">
                        <div className="skillbar-title bg-yellow-600"><span>CSS3</span></div>
                        <div className="skillbar-bar bg-yellow-600"></div>
                        <div className="skill-bar-percent">80%</div>
                    </div>
                    <div className="text-slate-100" data-percent="75%">
                        <div className="skillbar-title bg-teal-500"><span>Photoshop</span></div>
                        <div className="skillbar-bar bg-teal-500"></div>
                        <div className="skill-bar-percent">75%</div>
                    </div> 

                    <div className="text-slate-100" data-percent="45%">
                        <div className="skillbar-title bg-indigo-600"><span>Rails</span></div>
                        <div className="skillbar-bar bg-indigo-600"></div>
                        <div className="skill-bar-percent">45%</div>
                    </div> 
                </div>
            </div>
        </div>
    </>
  )
}

export default About