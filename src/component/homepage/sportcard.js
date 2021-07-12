import React from "react";
import "./sportcard.css";

const SportCard = ({ price, sport, image, rating, peopleRated, about }) => {
    return (<div className="sport-Container">
        <div class="inner">
            <img src={image} alt="img" />
        </div>
        <div className="price">
            <h2><i class="fas fa-dollar-sign"></i>{price}</h2>
        </div>
        <div className="sport-des">
            <h2>{sport}</h2>
            <div>
                <ul>
                    <li className="ratings">{rating}</li>
                    <li className="star"><i className="fas fa-star"></i></li>
                    <li className="star"><i className="fas fa-star"></i></li>
                    <li className="star"><i className="fas fa-star"></i></li>
                    <li className="star"><i className="fas fa-star"></i></li>
                </ul>
                <span className="people-rating">{peopleRated} Ratings</span>
            </div>
            <h3>{about}</h3>
        </div>
    </div>)
};

export default SportCard;