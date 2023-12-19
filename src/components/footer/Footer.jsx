import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Movix App - crafted with React.js, is your gateway to a cinematic adventure. Using TMDB data, it offers a visually stunning interface, featuring dynamic carousels, infinite scroll, and lazy loading for optimal performance. Dive into in-depth movie and TV show details with ratings and trailers. Elevate your movie experience with Movix.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <a href="https://www.facebook.com/iamamanchhetri" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://www.instagram.com/aman_chhetry/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://twitter.com/iamamanchhetri" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://www.linkedin.com/in/amankshetri/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </span>
                    <span className="icon">
                        <a href="https://github.com/aman-chhetri" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    </span>
                </div>

            </ContentWrapper>
        </footer>
    );
};

export default Footer;
