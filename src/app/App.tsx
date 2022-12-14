import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../app/pages/homepage/Homepage";
import Courses from "./pages/courses/Courses";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Notfound from "./pages/notfound/Notfound";
import Course from "./pages/course/Course";

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
        path: "/courses/Mathematics",
        element: <Course></Course>,
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "/register",
        element: <Register></Register>,
    },
    {
        path: "*",
        element: <Notfound></Notfound>,
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
