import React from "react";
import { mdiGraphOutline } from "@mdi/js";
import Icon from "@mdi/react";
import "./CourseCard.css";
import { useNavigate } from "react-router-dom";

interface CardProps {
    icon: typeof mdiGraphOutline;
    title: string;
    description: string;
}

const CourseCard = (props: CardProps) => {
    const navigate = useNavigate();
    return (
        <div className="courseCardContainer">
            <div className="courseCardContent">
                <Icon path={props.icon} size={1.5}></Icon>

                <div className="courseCardTitle">{props.title}</div>
            </div>

            <span className="courseCardDescription">{props.description}</span>

            <button
                className="courseCardButton"
                onClick={() => navigate("/courses/" + props.title)}
            >
                Open course
            </button>
        </div>
    );
};

export default CourseCard;
