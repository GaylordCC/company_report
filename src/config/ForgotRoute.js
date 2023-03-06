import { rest } from "lodash";
import Forgot from "../components/signin/forgot";


const ForgotRoute = ({component: Component, ...rest}) => {
    return < Forgot component={Component} />

}

export default ForgotRoute;