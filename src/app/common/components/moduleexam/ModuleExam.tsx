import React, { useEffect } from "react";
import { mdiPi, mdiBookOpenBlankVariant } from "@mdi/js";
import "./ModuleExam.css";

import "reactflow/dist/style.css";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { useState, useCallback } from "react";
import ReactFlow, {
    Viewport,
    addEdge,
    FitViewOptions,
    applyNodeChanges,
    applyEdgeChanges,
    Node,
    Edge,
    NodeChange,
    EdgeChange,
    Connection,
} from "reactflow";
import QuizQuestion from "../quizquestion/Quizquestion";

const ModuleExam = () => {
    return (
        <div className="examContent">
            <QuizQuestion
                question="Solve the following equation: 4x + 7 = 19"
                answers={["x = 2", "x = 3", "x = 4", "x = 5"]}
                correctAnswer={2}
            ></QuizQuestion>
            <QuizQuestion
                question="Solve the following equation: 3x - 5 = 7"
                answers={["x = 0", "x = 1", "x = 2", "x = 3"]}
                correctAnswer={2}
            ></QuizQuestion>
            <QuizQuestion
                question="Solve the following equation: x + 2 = 5"
                answers={["x = 0", "x = 1", "x = 2", "x = 3"]}
                correctAnswer={3}
            ></QuizQuestion>
            <QuizQuestion
                question="Solve the following equation: 4x - 6 = 10"
                answers={["x = 0", "x = 1", "x = 2", "x = 3"]}
                correctAnswer={2}
            ></QuizQuestion>
        </div>
    );
};

export default ModuleExam;
