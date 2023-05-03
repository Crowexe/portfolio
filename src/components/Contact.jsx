import React from 'react'

const Contact = () => {
  return (
    <>
        <div className="section" data-anchor="contact">
            <div className="content wow fadeInDown" data-wow-delay="0.2s">
                <h1>CONTACT ME</h1>
                <p>Whether you're interested in working with me or just want to say hello, I'd love to hear from you!</p>
                <br/>
                <div className="contact-form">

                <div id="form-messages"></div>
                <form id="ajax-contact" method="post" role="form" action="contact.php" data-toggle="validator">
                    <div className="form-group has-feedback wow fadeInLeft" data-wow-delay="0.6s">
                    <input type="text" className="form-control" id="name" name="name" placeholder="NAME" data-error="Field can't be blank!" required />
                    <span className="glyphicon form-control-feedback" aria-hidden="true"></span>
                    <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group has-feedback wow fadeInRight" data-wow-delay="0.8s">
                    <input type="email" className="form-control" id="email" name="email" placeholder="EMAIL" data-error="Field can't be blank!" required />
                    <span className="glyphicon form-control-feedback" aria-hidden="true"></span>
                    <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group has-feedback wow fadeInLeft" data-wow-delay="1s">
                    <textarea data-minlength="10" className="form-control" id="message" name="message" placeholder="MESSAGE" data-error="Minimum of 10 characters" required></textarea>
                    <span className="glyphicon form-control-feedback" aria-hidden="true"></span>
                    <div className="help-block with-errors"></div>
                    </div>

                    <div className="hidden">
                    <input type="text" className="form-control" id="human" name="human" placeholder=""/>
                    </div>
                    <div className="wow fadeInUp" data-wow-delay="1s">
                    <button type="submit" id="submit" name="submit" className="btn btn-lg">SEND MESSAGE</button>
                    </div>
                </form>
                <br/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact