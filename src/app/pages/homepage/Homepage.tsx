import React from "react";
import { mdiGraphOutline } from "@mdi/js";
import Icon from "@mdi/react";
import "./Homepage.css";

import { useNavigate } from "react-router-dom";

import Navbar from "../../common/components/navbar/Navbar";

const Homepage = () => {
    const navigate = useNavigate();
    return (
        <div className="homepageContainer">
            <Navbar></Navbar>

            <div className="pageContainer">
                <div className="logoContainer noselect">
                    <Icon size={8} path={mdiGraphOutline} rotate={15}></Icon>
                    <span className="logoContainerSpans">MindTrails</span>
                    <span className="logoContainerSpans">Learning</span>
                    <button
                        className="homepageButton"
                        type="button"
                        onClick={() => navigate("/courses")}
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
