import React from 'react'

const About = () => {
  return (
    <>
        <div className="section" data-anchor="skills">
            <div className="content">
                <h1 className="wow fadeInDown" data-wow-delay="0.2s">ABOUT ME</h1>
                <p className="wow fadeInDown" data-wow-delay="0.2s">Hi, I'm Brad Engelhardt! I'm a Silicon Valley based Web Designer & Front-end Developer focused on creating clean, responsive web designs!</p>

                <div className=" wow fadeInUp container-skillbar" data-wow-delay="0.2s">
                    <div className="skillbar clearfix " data-percent="90%">
                        <div className="skillbar-title bg-red-500"><span>HTML5</span></div>
                        <div className="skillbar-bar bg-red-500"></div>
                        <div className="skill-bar-percent">90%</div>
                    </div> 

                    <div className="skillbar clearfix " data-percent="80%">
                        <div className="skillbar-title bg-yellow-600"><span>CSS3</span></div>
                        <div className="skillbar-bar bg-yellow-600"></div>
                        <div className="skill-bar-percent">80%</div>
                    </div>
                    <div className="skillbar clearfix " data-percent="75%">
                        <div className="skillbar-title bg-teal-500"><span>Photoshop</span></div>
                        <div className="skillbar-bar bg-teal-500"></div>
                        <div className="skill-bar-percent">75%</div>
                    </div> 

                    <div className="skillbar clearfix " data-percent="45%">
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