import React from 'react';
import _Join from "../../components/templates/auth/_Join";
import {SubmitHandler} from "react-hook-form";
import withHead from "../withHead";

export interface JoinUser {
    username: string;
    password: string;
    passwordConfirm: string;
}

const Join = () => {

    const onSubmit: SubmitHandler<JoinUser> = async data => {
        console.log(data);
    };

    return (
        <_Join onSubmit={onSubmit} />
    );
};

export default withHead(Join, '우리집 | 회원가입');