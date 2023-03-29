import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";

function Router() {
    return (
        <div className="content">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}

export default Router;
