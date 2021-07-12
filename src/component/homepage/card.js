
import React from "react";
import "./card.css";
import { data } from "./data";
const Card = () => {
    return (<>
        {data.map(card => {
            return (<div className="card-Cont">
                <img src={card.image} alt="bicycle" />
                <h2>{card.text}</h2>
                <h3>{card.about}</h3>
            </div>)
        })}
    </>)
}

export default Card;