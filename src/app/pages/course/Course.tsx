import React from "react";
import { mdiPi, mdiBookOpenBlankVariant } from "@mdi/js";
import "./Course.css";

import "reactflow/dist/style.css";

import Navbar from "../../common/components/navbar/Navbar";

import { useState, useCallback } from "react";
import ReactFlow, {
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

const initialNodes: Node[] = [
    { id: "1", data: { label: "Node 1" }, position: { x: 5, y: 5 } },
    { id: "2", data: { label: "Node 2" }, position: { x: 5, y: 100 } },
    { id: "3", data: { label: "Node 3" }, position: { x: 5, y: 200 } },
    { id: "4", data: { label: "Node 4" }, position: { x: 5, y: 300 } },
    { id: "5", data: { label: "Node 5" }, position: { x: 5, y: 400 } },
    { id: "6", data: { label: "Node 6" }, position: { x: -100, y: 500 } },
    { id: "7", data: { label: "Node 7" }, position: { x: 100, y: 500 } },
    { id: "8", data: { label: "Node 8" }, position: { x: 5, y: 600 } },
    { id: "9", data: { label: "Node 9" }, position: { x: 5, y: 700 } },
    { id: "10", data: { label: "Node 10" }, position: { x: 5, y: 800 } },
    { id: "11", data: { label: "Node 11" }, position: { x: 5, y: 900 } },
    { id: "12", data: { label: "Node 12" }, position: { x: -100, y: 1000 } },
    { id: "13", data: { label: "Node 13" }, position: { x: 100, y: 1000 } },
];

const initialEdges: Edge[] = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e1-3", source: "1", target: "2" },
    { id: "e1-4", source: "2", target: "3" },
    { id: "e1-5", source: "3", target: "4" },
    { id: "e1-6", source: "4", target: "5" },
    { id: "e1-7", source: "5", target: "6" },
    { id: "e1-8", source: "5", target: "7" },
    { id: "e1-9", source: "6", target: "8" },
    { id: "e1-10", source: "7", target: "8" },
    { id: "e1-11", source: "8", target: "9" },
    { id: "e1-12", source: "9", target: "10" },
    { id: "e1-13", source: "10", target: "11" },
    { id: "e1-14", source: "11", target: "12" },
    { id: "e1-15", source: "11", target: "13" },
];

const fitViewOptions: FitViewOptions = {
    padding: 0.2,
};

const Course = () => {
    const [nodes] = useState<Node[]>(initialNodes);
    const [edges] = useState<Edge[]>(initialEdges);

    const onNodeClick = useCallback(
        (changes: any, node: any) => console.log(node),
        []
    );

    return (
        <div className="homepageContainer">
            <Navbar></Navbar>
            <div className="coursePageContainer">
                <div className="graphView">
                    <div className="graphViewButtons">
                        <button className="graphViewButton" type="button">
                            Practice Exams
                        </button>
                        <button className="graphViewButton" type="button">
                            Ratings
                        </button>
                    </div>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        fitView
                        fitViewOptions={fitViewOptions}
                        onNodeClick={onNodeClick}
                    >
                        <Background />
                        <Controls />
                    </ReactFlow>
                </div>
                <div className="contentView"></div>
            </div>
        </div>
    );
};

export default Course;
