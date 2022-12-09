import React from "react";
import { mdiPi, mdiBookOpenBlankVariant } from "@mdi/js";
import "./Courses.css";

import Navbar from "../../common/components/navbar/Navbar";

import CourseCard from "../../common/components/coursecard/CourseCard";

const mathDescription =
    "Explore the beauty of math through fun and engaging problem-solving adventures!";
const roDescription =
    "Experience the rich culture and history of Romania through immersive language lessons and engaging activities!";
const Courses = () => {
    return (
        <div className="homepageContainer">
            <Navbar></Navbar>
            <div className="coursesPageTitle">Available courses</div>
            <div className="coursesPageContainer">
                <CourseCard
                    icon={mdiPi}
                    title="Mathematics"
                    description={mathDescription}
                ></CourseCard>
                <CourseCard
                    icon={mdiBookOpenBlankVariant}
                    title="Romanian"
                    description={roDescription}
                ></CourseCard>
            </div>
        </div>
    );
};

export default Courses;
