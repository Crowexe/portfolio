import React from 'react'

const Portfolio = () => {
  return (
    <>
        <div className="section" data-anchor="projects">
            <div className="content-slide">
                <div className="slide">
                    <h1 className="wow fadeInDown" data-wow-delay="0.2s">XFAIRE</h1>
                    <p className="wow fadeInDown" data-wow-delay="0.2s">Digital streaming service</p>
                    <img className="wow fadeInUp" data-wow-delay="0.2s" data-src="https://s3-us-west-2.amazonaws.com/bradengelhardt/assets/xfaire.jpg"/>
                </div>
                <div className="slide">
                    <h1>MACHETE ENERGY</h1>
                    <p>Energy drink website</p>
                    <img data-src="https://s3-us-west-2.amazonaws.com/bradengelhardt/assets/machete.jpg"/>
                </div>
                <div className="slide">
                    <h1>PORTFOLIO</h1>
                    <p>Mockup of a personal portfolio I was working on for a friend.</p>
                    <img data-src="https://s3-us-west-2.amazonaws.com/bradengelhardt/assets/cascioportfolio.jpg"/>
                </div>
                <div className="slide">
                    <h1>THATONEBLOG</h1>
                    <p>Minimalist blogging platform.</p>
                    <img data-src="https://s3-us-west-2.amazonaws.com/bradengelhardt/assets/blog.jpg"/>
                </div>
                <div className="slide">
                    <h1>PIXBORED</h1>
                    <p>Website for sharing images and gifs.</p>
                    <img data-src="https://s3-us-west-2.amazonaws.com/bradengelhardt/assets/pixbored.jpg"/>
                </div>
                <div className="slide">
                    <h1>PERSONAL WEBSITE</h1>
                    <p>Responsive vertical/horizontal header website theme.</p>
                    <img data-src="https://s3-us-west-2.amazonaws.com/bradengelhardt/assets/personalsite.jpg"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Portfolio