import React, { useState } from "react";
import "./sport.css";
import SportCard from "./sportcard"
const sportData = [
    {
        id: 1,
        image: "image/sports/scuba.jpg",
        price: "125",
        sport: "Scuba",
        rating: "9",
        peopleRated: "166",
        about: "75% of the Earth is water. Divers live on a much bigger planet.We dive not to escape life, but for life not to escape us."
    },
    {
        id: 2,
        image: "image/sports/atv.jpg",
        price: "110",
        sport: "Atv",
        rating: "8",
        peopleRated: "100",
        about: "75% of the Earth is water. Divers live on a much bigger planet.We dive not to escape life, but for life not to escape us."
    },
    {
        id: 3,
        image: "image/sports/paragliding.jpg",
        price: "125",
        sport: "Paragliding",
        rating: "9",
        peopleRated: "106",
        about: "75% of the Earth is water. Divers live on a much bigger planet.We dive not to escape life, but for life not to escape us."
    },
    // {
    //     id: 4,
    //     image: "image/sports/yatch.jpg",
    //     price: "100",
    //     sport: "Yatch",
    //     rating: "9",
    //     peopleRated: "199",
    //     about: "75% of the Earth is water. Divers live on a much bigger planet.We dive not to escape life, but for life not to escape us."
    // },
    // {
    //     id: 5,
    //     image: "image/sports/horse.jpg",
    //     price: "200",
    //     sport: "Horse-Riding",
    //     rating: "9.5",
    //     peopleRated: "123",
    //     about: "75% of the Earth is water. Divers live on a much bigger planet.We dive not to escape life, but for life not to escape us."
    // }
];

const Sport = () => {
    const [data, setData] = useState(sportData);
    console.log(data);
    return (<div className="sport-wrapper">
        <h1>Popular Activities</h1>
        <div className="sport-Section">
            {data.map(sport => {
                return (<SportCard {...sport} />);
            })}
        </div>
    </div>)
}

export default Sport;