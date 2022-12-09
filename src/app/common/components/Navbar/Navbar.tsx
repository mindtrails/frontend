import React from "react";

import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navBarContainer">
            <ul>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#news">News</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <li style={{ float: "right" }}>
                    <a className="active" href="#about">
                        About
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
