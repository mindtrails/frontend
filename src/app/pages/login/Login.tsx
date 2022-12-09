import React from "react";
import { mdiGraphOutline } from "@mdi/js";
import Icon from "@mdi/react";
import "./Login.css";

import Navbar from "../../common/components/navbar/Navbar";

const Login = () => {
    return (
        <div className="homepageContainer">
            <Navbar></Navbar>

            <div className="pageContainer"></div>
        </div>
    );
};

export default Login;
