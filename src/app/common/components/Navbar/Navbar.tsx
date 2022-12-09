import { mdiAccountCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";

import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navBarContainer">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/cursuri">Cursuri</a>
                </li>
                <li></li>
                <li style={{ float: "right" }}>
                    <a href="/login">
                        <Icon
                            path={mdiAccountCircleOutline}
                            title="User Profile"
                            size={1.2}
                        ></Icon>
                        Login
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
