import { rest } from "lodash";
import LineChart from "../components/chart/LineChart";


const LineChartRoute = ({component: Component, ...rest}) => {
    return < LineChart component={Component} />

}

export default LineChartRoute;