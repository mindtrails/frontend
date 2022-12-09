import React from "react";
import { mdiGraphOutline } from "@mdi/js";
import Icon from "@mdi/react";
import "./Homepage.css";

import Navbar from "../../common/components/Navbar/Navbar";

const Homepage = () => {
    return (
        <div className="homepageContainer">
            <Navbar></Navbar>

            <body className="pageContainer">
                <div className="logoContainer">
                    <Icon size={8} path={mdiGraphOutline} rotate={15}></Icon>
                    <span className="logoContainerSpans">MindTrails</span>
                    <span className="logoContainerSpans">Learning</span>
                </div>
            </body>
        </div>
    );
};

export default Homepage;
