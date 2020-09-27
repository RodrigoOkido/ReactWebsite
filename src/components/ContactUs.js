import React from 'react';
import '../stylesheet/contactUs.css';


/**
 * ContactUs component. (Function based component)
 */
const ContactUs = () => {  
    return (    
        <div className="contact-section" id="contact">
            <div className="container contact">
                <h2>Interested? Contact us!</h2>
                <div className="row">
                    <div className="col-md-6 contact-info">
                        <span><span style={{fontWeight: 'bold'}}>Address:</span> Av. A place somewhere, 899 </span>
                        <span><span style={{fontWeight: 'bold'}}>Number:</span> (55) 9999-99999</span>
                        <span><span style={{fontWeight: 'bold'}}>Email (@):</span> ourservices@website.com</span>
                        <div className="social-media">
                            <h5>Follow Us!</h5>
                            <a href="#" className="fa fa-facebook"></a>
                            <a href="#" className="fa fa-instagram"></a>
                            <a href="#" className="fa fa-twitter"></a>
                            <a href="#" className="fa fa-linkedin"></a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form className="contact-form">
                            <div className="form-group">
                                <label className="field-label">Name:</label>
                                <input className="form-control form-control-lg" type="text" placeholder="Type your name"></input>
                            </div>
                            <div className="form-group">
                                <label className="field-label">Email:</label>
                                <input className="form-control form-control-lg" type="text" placeholder="Type your email"></input>
                            </div>
                            <div className="form-group">
                                <label className="field-label">Message:</label>
                                <textarea className="form-control form-control-lg" rows="5" placeholder="Type your text"></textarea>
                            </div>
                            <button className="btn btn-warning btn-lg" type="submit">Send</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ContactUs;