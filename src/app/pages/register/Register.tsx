import React from "react";
import { mdiGraphOutline } from "@mdi/js";
import Icon from "@mdi/react";
import "./Register.css";

import Navbar from "../../common/components/navbar/Navbar";

const Register = () => {
    return (
        <div className="homepageContainer">
            <Navbar></Navbar>

            <div className="pageContainer">
                <form className="loginRegisterForm">
                    <div className="loginRegisterFormTitle">CREATE ACCOUNT</div>
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <input type="submit"></input>
                    <a href="/login" className="registerInstead">
                        Already a member? Sign in
                    </a>
                </form>
            </div>
        </div>
    );
};

export default Register;
