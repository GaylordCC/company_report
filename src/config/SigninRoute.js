import { rest } from "lodash";
import SignInSide from "../components/signin/signInSide";


const SigninRoute = ({component: Component, ...rest}) => {
    return < SignInSide component={Component} />

}

export default SigninRoute;