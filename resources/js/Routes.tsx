import React from "react";
import {BrowserRouter, Routes as ReactRoutes , Route } from "react-router-dom";
import Presentation from "./Pages/Presentation";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";

export function Routes() {
    return (
        <BrowserRouter>
            <ReactRoutes>
                <Route path="/" element={ <Presentation /> } />
                <Route path="/register" element={ <Register /> } />
                <Route path="/login" element={ <Login /> } />
            </ReactRoutes>
        </BrowserRouter>
    )
}
