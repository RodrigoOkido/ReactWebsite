import React from 'react';
import '../stylesheet/clientCard.css'

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