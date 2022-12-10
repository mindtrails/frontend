import React, { useEffect } from "react";
import { mdiPi, mdiBookOpenBlankVariant } from "@mdi/js";
import "./Exam.css";

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

const Exam = () => {
    return <div className="contentView">EXAM</div>;
};

export default Exam;
