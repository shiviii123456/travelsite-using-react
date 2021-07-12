import React, { useEffect } from "react";
import "./leftBlog.css";
import Aos from "aos";

const data = [
    {
        img: "image/blog/img1.jpg",
        month: "Jun",
        date: "23",
        caption: "The Best Helicopter Tours",
        about: "We love to see you live an exciting, unique and unforgettable experience.",
    },
    {
        img: "image/blog/img2.jpg",
        month: "Jul",
        date: "23",
        caption: "Best Romantic Getaways",
        about: "Your satisfaction with your experience that your recommendation.",
    },
    {
        img: "image/blog/img3.jpeg",
        month: "Aug",
        date: "28",
        caption: "The Cruise Line Rankings",
        about: "The group of highly trained certified personnel for each attraction.",
    }
]
const LeftBlog = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <>
            {data.map(blog => {
                return (<div className="news" data-aos="fade-up">
                    <div className="items-1">
                        <img src={blog.img} alt="img" />
                        <div className="date">
                            <h3>{blog.month}</h3>
                            <h3>{blog.date}</h3>
                        </div>
                    </div>
                    <div className="items-2">
                        <h2>{blog.caption}</h2>
                        <p>{blog.about}</p>
                        <h3>read more</h3>
                    </div>
                </div>)
            })}
        </>
    )
}
export default LeftBlog;