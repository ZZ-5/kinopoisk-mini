import { Route, Routes } from "react-router-dom";
import "./index.scss";
import { routes } from "../../constatns/routes";

import React from 'react'

export const Content = () => {
    return (
        <div className="content">
            <Routes>
                {routes.map(route => {
                    return (
                        <Route key={route.id} path={route.to} element={route.element} />
                    )
                })}
            </Routes>
        </div>
    )
}
