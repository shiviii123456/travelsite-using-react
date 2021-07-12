import React, { useState } from "react";
import "./userReview.css";
const reviewData = [
    {
        id: 1,
        name: "Shivi",
        about: "Best tour agency,excellent vacations",
        review: "Travel companies that regularly share reviews with their Facebook page see an increase in traffic back to their company website",
        img: "image/userImage/user1.jpg",
        occupation: "web developer"
    },
    {
        id: 2,
        name: "Shivika",
        about: "Best tour agency,excellent vacations",
        review: "Travel companies that regularly share reviews with their Facebook page see an increase in traffic back to their company website",
        img: "image/userImage/user2.jpg",
        occupation: "web developer"
    },
    {
        id: 3,
        name: "Abhay",
        about: "Best tour agency,excellent vacations",
        review: "Travel companies that regularly share reviews with their Facebook page see an increase in traffic back to their company website",
        img: "image/userImage/user3.jpg",
        occupation: "web developer"
    },
    {
        id: 4,
        name: "Vivian",
        about: "Best tour agency,excellent vacations",
        review: "Travel companies that regularly share reviews with their Facebook page see an increase in traffic back to their company website",
        img: "image/userImage/user4.jpg",
        occupation: "web developer"
    },
    {
        id: 5,
        name: "Swati",
        about: "Best tour agency,excellent vacations",
        review: "Travel companies that regularly share reviews with their Facebook page see an increase in traffic back to their company website",
        img: "image/userImage/user5.jpg",
        occupation: "web developer"
    }
];
let i = 0;
const UserReview = () => {
    const [data, setData] = useState(reviewData[i]);
    const right = () => {
        if (i < reviewData.length - 1) {
            i = i + 1;
        }
        else {
            i = 0;
        }
        setData(reviewData[i])
    }
    const left = () => {
        if (i > 0)
            i = i - 1;
        else
            i = reviewData.length - 1;
        setData(reviewData[i]);
    }
    return (<>
        <div className="user-review">
            <i className="fas fa-quote-left"></i>
            <h1>{data.about}</h1>
            <p>{data.review}</p>
            <div className="review-img">
                <img src={data.img} alt="pic" />
                <h2>{data.name}</h2>
                <h3>{data.occupation}</h3>
            </div>
            <div className="move">
                <i className="fas fa-caret-left" onClick={left}></i>
                <i className="fas fa-caret-right" onClick={right}></i>
            </div>
        </div>;

    </>)
}
export default UserReview;