import axios from "axios";
import {LoginUser} from "../pages/auth/login";

const env: string = process.env.NODE_ENV || 'development'

export const postLogin = (data: LoginUser) => {
    return axios({
        method: 'post',
        url: '/account/login',
        baseURL: 'http://localhost:3000',
        headers: {
            'Content-Type': 'application/json',
        },
        data: data
    })
}

