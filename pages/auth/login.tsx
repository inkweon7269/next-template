import React from 'react';
import {SubmitHandler} from "react-hook-form";
import useStore from "../../store/useStore";
import _Login from "../../components/templates/auth/_Login";

export interface LoginUser {
    username: string;
    password: string;
}

const loginCb = (isSuccess, data, msg) => {
    if (isSuccess) {
        console.log(msg);
    } else {
        console.log(msg);
    }
}

const Login = () => {
    const { user } = useStore();
    const onSubmit: SubmitHandler<LoginUser> = async data => {
        await user.login(data, loginCb);
    };

    return (
        <_Login onSubmit={onSubmit} />
    );
};

export default Login;