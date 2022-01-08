import React, {FC, useEffect} from 'react';
import {useForm, FormProvider} from "react-hook-form";
import JoinWrapper from "../../organisms/auth/JoinWrapper";
import {Form} from "antd";
import {yupResolver} from '@hookform/resolvers/yup';
import {joinSchema} from "../../../validation/schema";
import moment from "moment";

type IProps = {
    setModalVisible: (data: any) => void;
    daumAddress: { postcode?: string, address?: string }
    onSubmit: (data: any) => void;
}

const _Join: FC<IProps> = ({
                               setModalVisible,
                               daumAddress,
                               onSubmit
                           }) => {

    const formMethods = useForm({
        // resolver: yupResolver(joinSchema)
        defaultValues: {
            gender: 'female',
            nation: ['japan'],
            isAgree1: false,
            isAgree2: false,
            inputs: [{label: '항목', value: '나루토'}],
            date: ['1985-10-12', moment(new Date()).format('YYYY-MM-DD')],
            rating: 2,
            postcode: '',
            address: '',
            addressDetail: '',
        }
    });

    const {handleSubmit, setValue} = formMethods;

    useEffect(() => {
        setValue('postcode', daumAddress.postcode);
        setValue('address', daumAddress.address);
    }, [daumAddress])

    return (
        <>
            <FormProvider {...formMethods}>
                <Form
                    layout='vertical'
                    onFinish={handleSubmit(onSubmit)}
                >
                    <JoinWrapper
                        setModalVisible={setModalVisible}
                    />
                </Form>
            </FormProvider>
        </>
    );
};

export default _Join;