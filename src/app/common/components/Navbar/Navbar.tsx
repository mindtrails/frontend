import { mdiAccountCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

const logOut = async (nav: any) => {
    const response = await fetch("http://localhost:8080/auth", {
        method: "DELETE",
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
    });

    console.log("logout", response);
    console.log("logout", await response.text());

    setTimeout(() => {
        nav("/");
    }, 1000);

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

    const nav = useNavigate();

    return (
        <div className="navBarContainer noselect">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/courses">Courses</a>
                </li>
                <li
                    style={{ float: "right" }}
                    onClick={() => (auth ? logOut(nav) : () => {})}
                >
                    <a href={auth ? undefined : "/login"}>
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
