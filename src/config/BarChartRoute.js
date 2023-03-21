import { rest } from "lodash";
import BarChart from "../components/chart/BarChart";


const BarChartRoute = ({component: Component, ...rest}) => {
    return < BarChart component={Component} />

}

export default BarChartRoute;