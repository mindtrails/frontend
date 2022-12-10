import React, { useEffect } from "react";
import {
    mdiPi,
    mdiBookOpenBlankVariant,
    mdiChevronLeft,
    mdiChevronRight,
} from "@mdi/js";
import "./Exam.css";

import "reactflow/dist/style.css";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { useState, useCallback } from "react";
import ReactPDF from "@react-pdf/renderer";
import { Document, Page, pdfjs } from "react-pdf";
import Icon from "@mdi/react";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { loremIpsum } from "../../../pages/course/markdown";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Doc = () => {
    const [numPages, setNumPages] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess(stuff: { numPages: number }) {
        console.log(stuff);
        setNumPages(stuff.numPages);
    }

    const increasePage = () => {
        if (pageNumber < numPages) {
            setPageNumber(pageNumber + 1);
        }
    };

    const decreasePage = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    };

    return (
        <div className="pdfContainer">
            <Document
                onLoadSuccess={onDocumentLoadSuccess}
                file={
                    "https://profesorjitaruionel.com/wp-content/uploads/2022/11/E_c_matematica_M_mate-info_2023_var_model.pdf"
                }
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <div className="pageNavigator">
                <div
                    onClick={decreasePage}
                    style={{
                        width: "30%",
                        paddingTop: "2px",
                        borderRight: "1px solid #999",
                        cursor: pageNumber === 1 ? "not-allowed" : "pointer",
                    }}
                >
                    <Icon
                        path={mdiChevronLeft}
                        size={1}
                        color={pageNumber === 1 ? "#BBB" : "#777"}
                    />
                </div>
                <div
                    style={{
                        width: "40%",
                        color: "#777",
                        paddingBottom: "3px",
                    }}
                >
                    {pageNumber}
                </div>
                <div
                    onClick={increasePage}
                    style={{
                        width: "30%",
                        paddingTop: "2px",
                        borderLeft: "1px solid #999",
                        cursor:
                            pageNumber === numPages ? "not-allowed" : "pointer",
                    }}
                >
                    <Icon
                        path={mdiChevronRight}
                        size={1}
                        color={pageNumber === numPages ? "#BBB" : "#777"}
                    />
                </div>
            </div>
        </div>
    );
};

const Exam = () => {
    return (
        <div className="examContent">
            <select className="selectExam">
                <option value="">
                    E_c_matematica_M_mate-info_2023_var_model
                </option>
            </select>

            <div className="pdfHolder">
                <Doc></Doc>
                <div className="examProblemInformation">
                    <ReactMarkdown
                        className="markdownView"
                        children={"## Lorem Ipsum" + loremIpsum}
                        remarkPlugins={[remarkGfm, remarkMath, rehypeKatex]}
                    />
                </div>
            </div>
        </div>
    );
};

export default Exam;
