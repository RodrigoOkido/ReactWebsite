import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';


class Navbar extends React.Component {

    // Home Section route
    homeSection = () => {
      return (
        <React.Fragment>
          <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
        </React.Fragment>
      );
    }

    
    // About Section route
    aboutSection = () => {
      return (
        <React.Fragment>
          <Link className="nav-link" to="/#about">About Us </Link>
        </React.Fragment>
      );
    }


    // Contact Section route
    contactSection = () => {
      return (
        <React.Fragment>
          <Link className="nav-link" to="/#contact">Contact</Link>
        </React.Fragment>
      );
    }


    // Render function
    render () {
      return(
        <BrowserRouter>
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Route path="/" exact component={this.homeSection} />
                  </li>
                  <li className="nav-item">
                    <Route path="/#about" exact component={this.aboutSection} />
                  </li>
                  <li className="nav-item">
                    <Route path="/#contact" exact component={this.contactSection} />
                  </li>
                </ul>
              </div>
            </nav>        
          </div>
        </BrowserRouter>
      )
    }
}



export default Navbar;