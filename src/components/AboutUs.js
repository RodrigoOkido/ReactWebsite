import React from 'react';
import Faker from 'faker';
import '../stylesheet/aboutUs.css';
import FeatureCard from './FeatureCard';

const AboutUs = () => {  
    return (    
        <div className="container">
            <h2 id='featuresSection'>Our Features</h2>
            <div className="row about">
                <FeatureCard
                    imageSrc='https://dummyimage.com/350x350/b3b3b3/000000'
                    featureTitle='High Quality Websites'
                    featureDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                />
            </div>
            <div className="row about">
                <FeatureCard
                    imageSrc='https://dummyimage.com/350x350/b3b3b3/000000'
                    featureTitle='Premium services'
                    featureDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                />
            </div>
            <div className="row about">
                 <FeatureCard
                    imageSrc='https://dummyimage.com/350x350/b3b3b3/000000'
                    featureTitle='24/7 Support'
                    featureDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                />
            </div>
        </div>
    );
}

export default AboutUs;