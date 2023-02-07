import { rest } from 'lodash';
import Dashboard from '../components/layouts/dashboard';

const PrivateRoute = ({ component: Component, ...rest}) => {
    return <Dashboard component={Component} />
}

export default PrivateRoute;