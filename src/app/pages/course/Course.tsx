import React, { useEffect } from "react";
import { mdiPi, mdiBookOpenBlankVariant } from "@mdi/js";
import "./Course.css";

import "reactflow/dist/style.css";

import Navbar from "../../common/components/navbar/Navbar";

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
import { Background } from "@reactflow/background";
import { Controls } from "@reactflow/controls";
import markdown, { loremIpsum } from "./markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import QuizQuestion from "../../common/components/quizquestion/Quizquestion";
import Exam from "../../common/components/exam/Exam";

const initialNodes: Node[] = [
    {
        id: "1",
        data: { label: "Linear Equations" },
        style: { background: "#d1ff75", border: "2px solid #ffffff00" },
        position: { x: 5, y: 5 },
    },
    {
        id: "2",
        data: { label: "Geometry" },
        style: { background: "#d1ff75", border: "2px solid #ffffff00" },
        position: { x: -100, y: 100 },
    },
    {
        id: "3",
        data: { label: "Systems Of Equations" },
        style: { background: "#d1ff75", border: "2px solid #ffffff00" },
        position: { x: 100, y: 100 },
    },
    {
        id: "4",
        data: { label: "Sine and Cosine" },
        style: { background: "#9bbffa", border: "2px solid #ffffff00" },
        position: { x: -100, y: 300 },
    },
    {
        id: "5",
        data: { label: "Factoring" },
        style: { background: "#9bbffa", border: "2px solid #ffffff00" },
        position: { x: 100, y: 200 },
    },
    {
        id: "12",
        data: { label: "Quadratics" },
        style: { background: "#9bbffa", border: "2px solid #ffffff00" },
        position: { x: 100, y: 300 },
    },
    {
        id: "6",
        data: { label: "Trigonometry" },
        style: { background: "#9bbffa", border: "2px solid #ffffff00" },
        position: { x: -300, y: 400 },
    },
    {
        id: "7",
        data: { label: "Matrices" },
        style: { background: "#9bbffa", border: "2px solid #ffffff00" },
        position: { x: -100, y: 400 },
    },
    {
        id: "8",
        data: { label: "Complex Numbers" },
        style: { background: "#9bbffa", border: "2px solid #ffffff00" },
        position: { x: 100, y: 400 },
    },
    {
        id: "9",
        data: { label: "Exponentials" },
        style: { background: "#9bbffa", border: "2px solid #ffffff00" },
        position: { x: 300, y: 400 },
    },
    {
        id: "10",
        data: { label: "Determinants" },
        style: { background: "#9bbffa", border: "2px solid #ffffff00" },
        position: { x: -100, y: 500 },
    },
    {
        id: "11",
        data: { label: "Logarithms" },
        style: { background: "#9bbffa", border: "2px solid #ffffff00" },
        position: { x: 300, y: 500 },
    },
];

const initialEdges: Edge[] = [
    { id: "e1-2", type: "step", source: "1", target: "2" },
    { id: "e1-3", type: "step", source: "1", target: "3" },
    { id: "e1-4", type: "step", source: "2", target: "4" },
    { id: "e1-5", type: "step", source: "3", target: "5" },
    { id: "e1-7", type: "step", source: "5", target: "12" },

    { id: "e1-17", type: "step", source: "4", target: "6" },
    { id: "e1-16", type: "step", source: "4", target: "7" },
    { id: "e1-10", type: "step", source: "4", target: "8" },
    { id: "e1-14", type: "step", source: "4", target: "9" },

    { id: "e1-8", type: "step", source: "12", target: "6" },
    { id: "e1-9", type: "step", source: "12", target: "7" },
    { id: "e1-15", type: "step", source: "12", target: "8" },
    { id: "e1-11", type: "step", source: "12", target: "9" },

    { id: "e1-12", type: "step", source: "7", target: "10" },
    { id: "e1-13", type: "step", source: "9", target: "11" },
];

const fitViewOptions: FitViewOptions = {
    padding: 0.2,
};

const defaultView: Viewport = { x: 150, y: 100, zoom: 1 };
const Course = () => {
    const [nodes, setNodes] = useState<Node[]>(initialNodes);
    const [edges, setEdges] = useState<Edge[]>(initialEdges);

    const [contentId, setContentId] = useState("1");
    const [isExams, setIsExams] = useState(false);
    const [isRateuri, setIsRateuri] = useState(false);

    const onNodeClick = useCallback((changes: any, node: any) => {
        setContentId(node.id);
        setIsExams(false);
        setIsRateuri(false);
    }, []);

    useEffect(() => {
        setNodes(
            initialNodes.map((v) =>
                v.id !== contentId
                    ? v
                    : {
                          id: v.id,
                          data: v.data,
                          position: v.position,
                          style: { ...v.style, border: "2px solid #fff" },
                      }
            )
        );
    }, [contentId]);

    return (
        <div className="homepageContainer">
            <Navbar></Navbar>
            <div className="coursePageContainer">
                <div className="graphView">
                    <div className="graphViewButtons">
                        <button
                            className="graphViewButton"
                            onClick={() => {
                                setIsExams(!isExams);
                                setIsRateuri(false);
                            }}
                            type="button"
                        >
                            Practice Exams
                        </button>
                        <button
                            className="graphViewButton"
                            onClick={() => {
                                setIsRateuri(!isRateuri);
                                setIsExams(false);
                            }}
                            type="button"
                        >
                            Ratings
                        </button>
                    </div>
                    <ReactFlow
                        defaultViewport={defaultView}
                        nodes={nodes}
                        edges={edges}
                        fitViewOptions={fitViewOptions}
                        onNodeClick={onNodeClick}
                        onNodeDrag={onNodeClick}
                    >
                        <Background />
                        <Controls />
                    </ReactFlow>
                </div>
                <div className="contentView">
                    <div hidden={isExams || isRateuri}>
                        <ReactMarkdown
                            className="markdownView"
                            children={
                                markdown.get(contentId) ||
                                "## This content doesn't exist yet." +
                                    loremIpsum
                            }
                            remarkPlugins={[remarkGfm, remarkMath, rehypeKatex]}
                        />
                        <div hidden={contentId !== "1"}>
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
                        </div>
                    </div>
                    <div hidden={!isExams}>
                        <Exam></Exam>
                    </div>
                    <div hidden={!isRateuri}>Test</div>
                </div>
            </div>
        </div>
    );
};

export default Course;
