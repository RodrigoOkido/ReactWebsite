import React from 'react';


/**
 * Navbar component. (Class based component)
 */
class Navbar extends React.Component {

    // Render function
    render () {
      return(
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="./">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./#client">Our Clients</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./#about">About Us </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </nav>        
      )
    }
}



export default Navbar;