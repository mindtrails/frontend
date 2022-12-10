import React, { useEffect, useState } from "react";
import { mdiGraphOutline } from "@mdi/js";
import Icon from "@mdi/react";

import "./Quizquestion.css";

interface QuizProps {
    question: string;
    answers: string[];
    correctAnswer: number;
}

// const generateOptions = (question: string, options: string[]) => {
//     return options.map((v) => (
//         <div key={question + v + "container"}>
//             <input type={"radio"} key={question + v}></input>
//             <label>{v}</label>
//         </div>
//     ));
// };

const QuizQuestion = (props: QuizProps) => {
    // const [options, setOptions] = useState<JSX.Element[]>([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isAnswered, setIsAnswered] = useState(-1);

    // useEffect(() => {
    //     setOptions(generateOptions(props.question, props.answers));
    // }, [props]);

    return (
        <div className="quizContainer">
            <div className="quizQuestion">{props.question}</div>
            <div className="quizOptions">
                <button
                    className="quizButton"
                    style={
                        isAnswered === 0
                            ? { background: isCorrect ? "#89fc5b" : "red" }
                            : {}
                    }
                    onClick={() => {
                        setIsAnswered(0);
                        setIsCorrect(0 === props.correctAnswer);
                    }}
                >
                    {props.answers[0]}
                </button>
                <button
                    className="quizButton"
                    style={
                        isAnswered === 1
                            ? { background: isCorrect ? "#89fc5b" : "red" }
                            : {}
                    }
                    onClick={() => {
                        setIsAnswered(1);
                        setIsCorrect(1 === props.correctAnswer);
                    }}
                >
                    {props.answers[1]}
                </button>
                <button
                    className="quizButton"
                    style={
                        isAnswered === 2
                            ? { background: isCorrect ? "#89fc5b" : "red" }
                            : {}
                    }
                    onClick={() => {
                        setIsAnswered(2);
                        setIsCorrect(2 === props.correctAnswer);
                    }}
                >
                    {props.answers[2]}
                </button>
                <button
                    className="quizButton"
                    style={
                        isAnswered === 3
                            ? { background: isCorrect ? "#89fc5b" : "red" }
                            : {}
                    }
                    onClick={() => {
                        setIsAnswered(3);
                        setIsCorrect(3 === props.correctAnswer);
                    }}
                >
                    {props.answers[3]}
                </button>
            </div>
        </div>
    );
};

export default QuizQuestion;
