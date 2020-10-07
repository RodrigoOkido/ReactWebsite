import React from 'react';
import '../stylesheet/contactUs.css';


/**
 * ContactUs component. (Function based component)
 */
class ContactUs extends React.Component{  

    // Define state for each input field on the contact form.
    state = {nameField: '', emailField: '', msgField: ''};


    // Keeps tracking and updating the name input field.
    onNameInputChange = (event) => {
        this.setState({nameField: event.target.value})
    };


    // Keeps tracking and updating the email input field.
    onEmailInputChange = (event) => {
        this.setState({emailField: event.target.value})
    }


    // Keeps tracking the message text field.
    onMsgInputField = (event) => {
        this.setState({msgField: event.target.value})
    }


    // Execute action when user press the send button.
    // This only prints the actual states of each fields filled on alert.
    // The consistency of the data is not being made. For example, fill the email
    // field without the '@' will be valid.
    onFormSubmit = (event) => {
        event.preventDefault();

        if (this.state.nameField == '' || this.state.emailField == '' || this.state.msgField == '') {
            alert("All fields must be filled.")
        } else {
            alert("Message Sended!" + "\n" + 
                 this.state.nameField + "\n" + 
                 this.state.emailField + "\n" + 
                 this.state.msgField);
        }
    }


    // Render method.
    render() {
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
                                <a href="/" className="fa fa-facebook"></a>
                                <a href="/" className="fa fa-instagram"></a>
                                <a href="/" className="fa fa-twitter"></a>
                                <a href="/" className="fa fa-linkedin"></a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <form className="contact-form" onSubmit={this.onFormSubmit}>
                                <div className="form-group">
                                    <label className="field-label">Name:</label>
                                    <input 
                                        className="form-control form-control-lg" 
                                        type="text" 
                                        placeholder="Type your name" 
                                        onChange={this.onNameInputChange} 
                                        value={this.state.nameField}    
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="field-label">Email:</label>
                                    <input 
                                        className="form-control form-control-lg" 
                                        type="text" 
                                        placeholder="Type your email" 
                                        onChange={this.onEmailInputChange} 
                                        value={this.state.emailField}   
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="field-label">Message:</label>
                                    <textarea 
                                        className="form-control form-control-lg" 
                                        rows="5" 
                                        placeholder="Type your text" 
                                        onChange={this.onMsgInputField} 
                                        value={this.state.msgField}   
                                    />
                                </div>
                                <button className="btn btn-warning btn-lg" type="submit">Send</button>
                            </form>
                        </div>
    
                    </div>
                </div>
            </div>
        )
    } 
}

export default ContactUs;