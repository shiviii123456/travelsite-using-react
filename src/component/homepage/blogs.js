import React, { useEffect } from "react";
import Aos from "aos";
import "./blog.css";
import LeftBlog from "./leftBlog";

const Blog = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className="blog-wrapper">
            <h1>Our Blogs</h1>
            <h3>We keep you informed of the latest news from the vacation world, subscribe to our blog and find out everything.</h3>
            <div className="blog-Container">
                <div className="left-Container">
                    <LeftBlog />
                </div>
                <div className="right-Container">
                    <div className="news-right" data-aos="fade-left">
                        <div className="items-3">
                            <img src="image/blog/img4.jpg" alt="img" />
                            <div className="month">
                                <h3>28</h3>
                                <h3>Aug</h3>
                            </div>
                        </div>
                        <div className="items-4">
                            <h2>World's Most Expensive Private Island Opens</h2>
                            <p>Private Island is located on the Palawan archipelago in the Philippines, two hours from Manila, and will offer visitors 15 acres of private land, where they can partake in tennis.</p>
                            <h3>read more</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Blog;