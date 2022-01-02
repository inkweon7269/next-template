import React, {FC} from 'react';
import {useForm, FormProvider} from "react-hook-form";
import JoinWrapper from "../../organisms/auth/JoinWrapper";
import {Form} from "antd";
import { yupResolver } from '@hookform/resolvers/yup';
import {joinSchema} from "../../../validation/schema";

type IProps = {
    onSubmit: (data: any) => void
}

const _Join: FC<IProps> = ({onSubmit}) => {

    const formMethods = useForm({
        // resolver: yupResolver(joinSchema)
        defaultValues: {
            gender: 'female',
            nation: ['japan'],
            isAgree1: false,
            isAgree2: false
        }
    });

    const {handleSubmit} = formMethods;

    return (
        <FormProvider {...formMethods}>
            <Form
                layout='vertical'
                onFinish={handleSubmit(onSubmit)}
            >
                <JoinWrapper/>
            </Form>
        </FormProvider>
    );
};

export default _Join;