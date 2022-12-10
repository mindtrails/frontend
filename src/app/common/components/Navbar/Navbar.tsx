import { mdiAccountCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useEffect, useState } from "react";

import "./Navbar.css";

const checkAuth = async () => {
    const response = await fetch("http://localhost:8080/auth", {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
    });

    console.log(response);
    console.log(response.text());

    return response.status === 200;
};

const Navbar = () => {
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        const aaa = async () => {
            setAuth(await checkAuth());
        };
        aaa();
    }, []);
    return (
        <div className="navBarContainer">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/courses">Courses</a>
                </li>
                <li style={{ float: "right" }}>
                    <a href="/login">
                        <Icon
                            className="loginIcon"
                            path={mdiAccountCircleOutline}
                            title="User Profile"
                            size={1}
                        ></Icon>
                        <span>{auth ? "Logout" : "Login"}</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
