import React from "react";
import { mdiGraphOutline } from "@mdi/js";
import Icon from "@mdi/react";
import "./Courses.css";

import Navbar from "../../common/components/navbar/Navbar";

const Courses = () => {
    return (
        <div className="homepageContainer">
            <Navbar></Navbar>

            <div className="pageContainer"></div>
        </div>
    );
};

export default Courses;
