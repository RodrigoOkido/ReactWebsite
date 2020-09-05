import React from 'react';
import '../stylesheet/featureCard.css'

const FeatureCard = (props) => {

    return (
        <React.Fragment className="featureCard">
            <div className="col-md-4">
                <img id='ftImg' src={props.imageSrc} alt="" />
            </div>
            <div className="col-md-8">
                <h3>{props.featureTitle}</h3>
                <p>{props.featureDescription}</p>
            </div>
        </React.Fragment >
    )
}

export default FeatureCard;