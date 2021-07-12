import React from "react";
import "./footer.css";

const Footer = () => {
    return (<footer>
        <div class="footer">
            <div class="footer_about">
                <h3>About Us</h3>
                <p>It seems that the more places I see and experience, the bigger I realize the world to be. The more I become aware of, the more I realize how relatively little I know of it, how many places I have still to go, how much more there is to learn.</p>
            </div>
            <div class="footer_main">
                <h3>Quick Start</h3>
                <ul>
                    <li>lorem lorem</li>
                    <li>lorem</li>
                    <li>lorem lorem</li>
                    <li>lorem lorem</li>
                </ul>
            </div>
            <div class="footer_right">
                <div class="footer_links">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-telegram-plane"></i>
                    <i class="fab fa-pinterest"></i>
                </div>
            </div>
        </div>
        <div class="copyright">
            Copyright © 2021 All Rights Reserved by Shivangi Foundation.
        </div>
    </footer>)
}

export default Footer;