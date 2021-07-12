import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import Card from "./card";
import "./card-dest.css";
import Aos from "aos";
import "aos/dist/aos.css";

const data = [
    {
        id: 1,
        image: "image/america.jpg",
        place: "America",
        rating: 8.5,
        about: "Not only must we be good, but we must also be good for something"
    },
    {
        id: 2,
        image: "image/canada.jpg",
        place: "Canada",
        rating: 8.5,
        about: "Not only must we be good, but we must also be good for something"
    },
    {
        id: 3,
        image: "image/greece.jpg",
        place: "Greece",
        rating: 8,
        about: "Not only must we be good, but we must also be good for something"
    },
    {
        id: 4,
        image: "image/rome.jpg",
        place: "Rome",
        rating: 9.5,
        about: "Not only must we be good, but we must also be good for something"
    },
    {
        id: 5,
        image: "image/machupichu.jpg",
        place: "MachuPichu",
        rating: 9.5,
        about: "Not only must we be good, but we must also be good for something"
    },
    {
        id: 6,
        image: "image/hawaii.jpg",
        place: "Hawaii",
        rating: 7.5,
        about: "Not only must we be good, but we must also be good for something"
    }
]

const CardDest = () => {
    const [hover, setHover] = useState(false)
    const onHover = (id) => {
        setHover(id)
    }
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, [])
    return (
        <div className="wrapper" data-aos="fade-up">
            {data.map(card => {
                return (
                    <div className="card-Container">
                        <img src={card.image} alt="img" />
                        <div className="card-text" onMouseOver={() => onHover(card.id)} onMouseLeave={() => setHover(false)}>
                            <h2>{card.place}</h2>
                            <ul className="rating">
                                <li>{card.rating}</li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                                <li><i className="fas fa-star"></i></li>
                            </ul>
                            {hover === card.id ? <h3 className={hover ? "active" : "noActive"}>{card.about}</h3> : null}
                        </div>
                    </div>)
            })}
        </div >
    )
}
export default CardDest;