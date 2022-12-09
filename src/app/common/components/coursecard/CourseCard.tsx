import React from "react";
import { mdiGraphOutline } from "@mdi/js";
import Icon from "@mdi/react";
import "./CourseCard.css";

interface CardProps {
    icon: typeof mdiGraphOutline;
    title: string;
    description: string;
}

const CourseCard = (props: CardProps) => {
    return (
        <div className="courseCardContainer">
            <div className="courseCardContent">
                <Icon path={props.icon} size={1.5}></Icon>

                <div className="courseCardTitle">{props.title}</div>
            </div>

            <span className="courseCardDescription">{props.description}</span>

            <button className="courseCardButton">Open course</button>
        </div>
    );
};

export default CourseCard;
