import { rest } from "lodash";
import { Component } from "react";
import LineChart2 from "../components/chart/LineChart2";

const LineChart2Route = ({component: Component, ...rest}) => {
    return < LineChart2 componet={Component} />
}

export default LineChart2Route;