import React, {useState} from 'react';
import _Join from "../../components/templates/auth/_Join";
import {SubmitHandler} from "react-hook-form";
import withHead from "../withHead";
import DaumPostModal from "../../components/templates/modal/DaumPostModal";

export interface JoinUser {
    username: string;
    password: string;
    passwordConfirm: string;
    date: any[];
}

const Join = () => {

    const [isModalVisible, setModalVisible] = useState(false);
    const [daumAddress, setAddress] = useState({});

    const onSubmit: SubmitHandler<JoinUser> = async data => {
        const start = data.date[0];
        const end = data.date[1];
        console.log(data);
        console.log(start, end);
    };

    return (
        <>
            <_Join
                setModalVisible={setModalVisible}
                daumAddress={daumAddress}
                onSubmit={onSubmit}
            />

            <DaumPostModal
                isModalVisible={isModalVisible}
                setModalVisible={setModalVisible}
                setAddress={setAddress}
            />
        </>
    );
};

export default withHead(Join, '우리집 | 회원가입');