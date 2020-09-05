import React from 'react';
import Faker from 'faker';
import ClientCard from './ClientCard';
import '../stylesheet/ourClients.css'


const OurFeatures = () => {  
    return (    
        <div className="clients">
            <h3>Our Clients</h3>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ClientCard 
                            title="Best choice!" 
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua." 
                            image={Faker.image.business()}
                        />
                    </div>
                    <div className="col">
                        <ClientCard 
                            title="Amazing!" 
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam." 
                            image={Faker.image.sports()}
                        />
                    </div>
                    <div className="col">
                        <ClientCard 
                            title="Incredible support!" 
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat." 
                            image={Faker.image.transport()}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurFeatures;