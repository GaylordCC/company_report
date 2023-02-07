import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Company from "../components/company";
import Visit from "../components/visit";
import ListCompany from "../components/company/listCompany";
import ListVisit from "../components/visit/listVisit";
import Dashboard from "../components/layouts/dashboard";
import ReactDOM from "react-dom/client";
import PrivateRoute from "./PrivateRoute";

function Routes() {
    const router = createBrowserRouter ([
        {
            path: "/",
            element: <PrivateRoute component={ListCompany}/>,
        },
        {
            path: "company",
            element: <PrivateRoute component={Company}/>,
        },
        {
            path: "visit",
            element: <PrivateRoute component={Visit}/>,
        },
        {
            path: "list_company",
            element: <PrivateRoute component={ListCompany}/>,
        },
        {
            path: "list_visit",
            element: <PrivateRoute component={ListVisit}/>,
        },
    ]);
    
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}


export default Routes;