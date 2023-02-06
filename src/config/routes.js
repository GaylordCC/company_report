import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Company from "../components/company";
import Visit from "../components/visit";
import List from "../components/company/list";
import ListV from "../components/visit/listV";
import Dashboard from "../components/layouts/dashboard";
import ReactDOM from "react-dom/client";

function Routes() {
    const router = createBrowserRouter ([
        {
            path: "/",
            element: <Dashboard/>,
        },
        {
            path: "company",
            element: <Company/>,
        },
        {
            path: "visit",
            element: <Visit/>,
        },
        {
            path: "list",
            element: <List/>,
        },
        {
            path: "listV",
            element: <ListV/>,
        },
    ]);
    
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}


export default Routes;