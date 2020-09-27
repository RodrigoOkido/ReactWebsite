import React from 'react';
import '../stylesheet/clientCard.css'


/**
 * CliendCard component. (Function based component)
 * 
 * @param {*} props Receives the image source of the client and some information
 *                  about the card. Title and description.
 */
const ClientCard = (props) => {

    return (
        <div className="card">
            <img src={props.image} className="card-img-top" alt="city" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
            </div>
        </div>  
    )
}

export default ClientCard;