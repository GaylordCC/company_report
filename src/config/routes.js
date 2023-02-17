import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Company from "../components/company";
import Visit from "../components/visit";
import ListCompany from "../components/company/listCompany";
import ListVisit from "../components/visit/listVisit";
import Report from "../components/report";
import ListReport from "../components/report/listReport";
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
        {
            path: "report",
            element: <PrivateRoute component={Report}/>,
        },
        {
            path: "list_report",
            element: <PrivateRoute component={ListReport}/>,
        },
    ]);
    
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}


export default Routes;