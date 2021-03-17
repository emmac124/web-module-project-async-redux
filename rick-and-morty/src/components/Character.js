import React from 'react';

const Character = (props) => {

    const {image, name, status, gender, location} = props;

    return (
        <div className="character-container">
            <div className="character-box">
                <div className="img">
                    <img src={image} alt="character" />
                </div>
                <div className="information">
                    <p>
                        <span>Name:</span> {name}
                    </p>
                    <p>
                        <span>Status:</span> {status}
                    </p>
                    <p>
                        <span>Location:</span> {location}
                    </p>
                    <p>
                        <span>Gender:</span> {gender}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Character;
