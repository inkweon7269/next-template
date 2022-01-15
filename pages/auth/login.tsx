import React from 'react';
import {SubmitHandler} from "react-hook-form";
import useStore from "../../store/useStore";
import _Login from "../../components/templates/auth/_Login";
import withHead from "../withHead";

export interface LoginUser {
    username: string;
    password: string;
}

const loginCb = (isSuccess: boolean, data: any, msg: any) => {
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

export default withHead(Login, '우리집 | 로그인');