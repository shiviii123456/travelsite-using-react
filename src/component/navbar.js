import React, { useState } from "react";
import "./navbar.css"
import { Link } from "react-router-dom";
import { link } from "./link";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const closeMobileMenu = () => {
        setClick(false)
    }
    return (<nav className="navbar">
        <div className="left">
            TRAVEL<span>ASIA</span>
        </div>
        <div className="close" onClick={() => setClick(!click)}>
            {click ? <i class="fas fa-times"></i> : <i class="fas fa-bars"></i>}
        </div>
        <ul className={click ? "right-ul active" : "right-ul"}>
            {link.map(data => {
                return (<li>
                    <Link to={data.to} className="item" onClick={closeMobileMenu}>
                        {data.page}
                    </Link>
                </li>)
            })}
        </ul>
    </nav>)
}
export default Navbar;