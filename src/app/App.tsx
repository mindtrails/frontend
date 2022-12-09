import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "../app/pages/homepage/Homepage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage></Homepage>,
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
