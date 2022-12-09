import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../app/pages/homepage/Homepage";
import Courses from "./pages/courses/Courses";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage></Homepage>,
    },
    {
        path: "/courses",
        element: <Courses></Courses>,
    },
    {
        path: "/login",
        element: <Courses></Courses>,
    },
    {
        path: "/register",
        element: <Courses></Courses>,
    },
]);

const App = () => {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
