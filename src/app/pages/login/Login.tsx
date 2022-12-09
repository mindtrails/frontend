import React from "react";
import { mdiGraphOutline } from "@mdi/js";
import Icon from "@mdi/react";
import "./Login.css";

import Navbar from "../../common/components/navbar/Navbar";

const Login = () => {
    return (
        <div className="homepageContainer">
            <Navbar></Navbar>

            <div className="pageContainer">
                <form className="loginRegisterForm">
                    <div className="loginRegisterFormTitle">LOGIN</div>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <input type="submit"></input>
                    <a href="/register" className="registerInstead">
                        Not a member? Signup now
                    </a>
                </form>
            </div>
        </div>
    );
};

export default Login;
