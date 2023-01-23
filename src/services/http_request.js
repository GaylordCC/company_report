import { HeatPumpSharp } from "@mui/icons-material";
import axios from "axios";
import _snakecase from 'lodash.snakecase';
import createHumps from '../../node_modules/lodash-humps/lib/createHumps';
import humps from 'lodash-humps';

const snakes = createHumps(_snakecase);

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    time: 3000, //3 segundos = 3000 ms
    transformRequest: [
        ...axios.defaults.transformRequest,
        data => humps(data)
    ],
    transformRequest: [
        data => snakes(data),
        ...axios.defaults.transformRequest
    ]
});

instance.interceptors.request.use(
    async config => {
    //   const authToken = lscache.get(AUTH_TOKEN)

    //   if (!!authToken) {
    //     config.headers['Access-Token'] = authToken[1].token
    //     config.headers['Token-Type'] = `Bearer`
    //     config.headers['Field-Token'] = authToken[0]
    //   }
     return config
    },
    error => {
        return Promise.reject(error)
    }
);

instance.interceptors.response.use(
    response => {
        return response;
    },
    async error => {
        console.log(error)
        const {response: {status, config}} = error;
        if (status === 401 && config.headers.Authorization){
            //lscache.set(AUTH_TOKEN, '')
            //history.go(/login)
        }else {
            return Promise.reject(error);
        }
    }
);

export default instance;