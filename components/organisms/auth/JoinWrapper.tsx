import React from 'react';
import styled from "styled-components";
import TextField from "../../molecules/form/TextField";
import ButtonField from "../../molecules/form/ButtonField";
import {MinusCircleOutlined, PlusOutlined, UserAddOutlined} from "@ant-design/icons";
import {useFormContext, useFieldArray} from "react-hook-form";
import TextAreaField from "../../molecules/form/TextAreaField";
import SwitchField from "../../molecules/form/SwitchField";
import RadioField from "../../molecules/form/RadioField";
import CheckboxField from "../../molecules/form/CheckboxField";
import SelectField from "../../molecules/form/SelectField";
import {Space} from "antd";


const JoinWrapper = () => {
    const {control, watch, getValues, setValue, formState: {errors}} = useFormContext();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "inputs"
    });

    return (
        <Join>
            <TextField
                control={control}
                label='이메일'
                name='email'
                errorMessage={errors.email?.message}
            />

            <TextField
                control={control}
                label='비밀번호'
                name='password'
                type='password'
                errorMessage={errors.password?.message}
            />

            <TextField
                control={control}
                label='비밀번호 확인'
                name='passwordConfirm'
                type='password'
                errorMessage={errors.passwordConfirm?.message}
            />

            <TextField
                control={control}
                label='나이'
                name='age'
                type='number'
                errorMessage={errors.passwordConfirm?.message}
            />

            <TextAreaField
                control={control}
                label='자기소개'
                name='intro'
            />

            <RadioField
                control={control}
                label='성별'
                name='gender'
                options={[
                    {
                        value: 'male',
                        label: '남자'
                    },
                    {
                        value: 'female',
                        label: '여자'
                    }
                ]}
            />

            <CheckboxField
                control={control}
                name='nation'
                options={[
                    {value: 'korea', label: '한국'},
                    {value: 'japan', label: '일본'},
                ]}
            />

            <CheckboxField
                control={control}
                name='isAgree1'
                text='개인 정보 수집 동의 2'
            />

            <SwitchField
                control={control}
                label='개인 정보 수집 동의 1'
                chkLabel='Yes'
                unChkLabel='No'
                name='isAgree2'
            />

            <SelectField
                control={control}
                name='movie1'
                label='영화1'
                placeholder='영화를 선택해 주세요.'
                options={[
                    {value: '매트릭스', label: '매트릭스'},
                    {value: '스파이더맨', label: '스파이더맨'},
                ]}
            />

            <SelectField
                control={control}
                name='movie2'
                label='영화2'
                showSearch={true}
                placeholder='영화를 선택해 주세요.'
                options={[
                    {value: '매트릭스', label: '매트릭스'},
                    {value: '스파이더맨', label: '스파이더맨'},
                ]}
            />

            {fields.map((item, index) => (
                <Space key={item.id} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                    <TextField control={control} name={`inputs.${index}.label`} width='100px' display='inline-block' placeholder='항목' />
                    <TextField control={control} name={`inputs.${index}.value`} width='100px' display='inline-block' placeholder='예시' />
                    <MinusCircleOutlined onClick={() => remove(index)} />
                </Space>
            ))}

            <ButtonField
                text="항목 추가"
                type='dashed'
                size='large'
                icon={<PlusOutlined/>}
                onClick={() => append({ value: "", label: "" })}
                block
            />

            <ButtonField
                text='회원가입'
                type='primary'
                htmlType='submit'
                size='large'
                icon={<UserAddOutlined/>}
                block
            />
        </Join>
    );
};

export default JoinWrapper;

const Join = styled.div`
  width: 500px;
  margin: 0 auto;
  padding-bottom: 200px;
`;