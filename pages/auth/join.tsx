import React from 'react';
import _Join from "../../components/templates/auth/_Join";
import {SubmitHandler} from "react-hook-form";
import withHead from "../withHead";

export interface JoinUser {
    username: string;
    password: string;
    passwordConfirm: string;
    date: any[];
}

const Join = () => {

    const onSubmit: SubmitHandler<JoinUser> = async data => {
        const start = data.date[0];
        const end = data.date[1];
        console.log(data);
        console.log(start, end);
    };

    return (
        <_Join
            onSubmit={onSubmit}
        />
    );
};

export default withHead(Join, '우리집 | 회원가입');