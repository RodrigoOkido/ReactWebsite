import React from 'react';
import '../stylesheet/featureCard.css'


/**
 * FeatureCard component. (Function based component)
 * 
 * @param {*} props Receives the image source and some information about the 
 *                  card. Title and description. 
 */
const FeatureCard = (props) => {

    return (
        <React.Fragment>
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