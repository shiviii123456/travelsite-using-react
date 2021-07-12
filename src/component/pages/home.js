import React from "react";
import "./home.css";
import Front from "../homepage/front";
import Middle from "../homepage/middle";
import Review from "../homepage/reviews";
import Sport from "../homepage/sports";
import Video from "../homepage/video";
import Blog from "../homepage/blogs";
const Home = () => {
    return (<div className="home">
        <Front />
        <Middle />
        <Review />
        <Sport />
        <Video />
        <Blog />
    </div>)
}

export default Home;