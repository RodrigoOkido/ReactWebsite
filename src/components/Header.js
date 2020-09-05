import React from 'react';
import Navbar from './Navbar';
import '../stylesheet/header.css';

const Header = () => {  
    return (    
        <React.Fragment>
            <Navbar />
            <div className="headerPage" >
                <div className="header-title-description">
                    <h1>Welcome to our Website!</h1>
                    <h5>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </h5>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;