import { rest } from "lodash";
import BodyReport from "../components/report/bodyReport";
import '../components/report/__style__/bodyReport.css';

const AlternRoute = ({component: Component, ...rest}) => {
    return < BodyReport component={Component} />

}

export default AlternRoute;