import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Company from "../components/company";
import Visit from "../components/visit";
import ListCompany from "../components/company/listCompany";
import ListVisit from "../components/visit/listVisit";
import Report from "../components/report";
import ListReport from "../components/report/listReport";
import PrivateRoute from "./PrivateRoute";
import BodyReport from "../components/report/bodyReport";
import AlternRoute from "./AlternRoute";
import SigninRoute from "./SigninRoute";
import SignInSide from "../components/signin/signInSide";
import ForgotRoute from "./ForgotRoute";
import Forgot from "../components/signin/forgot";
import BarChart from "../components/chart/BarChart";
import BarChartRoute from "./BarChartRoute";
import LineChart from "../components/chart/LineChart";
import LineChartRoute from "./LineChartRoute";
import LineChart2 from "../components/chart/LineChart2";
import LineChart2Route from "./LineChart2Route";

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
        {
            path: "body_report/:id",
            element: <AlternRoute component={BodyReport}/>,
        },
        {
            path: "sign_in",
            element: <SigninRoute component={SignInSide}/>,
        },
        {
            path: "forgot",
            element: <ForgotRoute component={Forgot}/>,
        },
        {
            path: "barchart/:id",
            element: <BarChartRoute component={BarChart}/>,
        },
        {
            path: "linechart/:id",
            element: <LineChartRoute component={LineChart}/>,
        },
        {
            path: "linechart2/:id",
            element: <LineChart2Route component={LineChart2}/>,
        },



    ]);
    
    return (
        <React.StrictMode>
            <RouterProvider router={router} />           
        </React.StrictMode>
    );
}


export default Routes;