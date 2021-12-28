import React, {FC} from 'react';
import {Input as AntInput, InputNumber as AntNumber} from "antd";
import {InputProps} from "antd";
import styled, {css} from "styled-components";

const AntPassword = AntInput.Password;

export interface IPropsInput {
    field?: any;
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    background?: string;
    min?: string;
    max?: string;
}

const StyledInput: FC<IPropsInput> = (
    {
        field,
        type,
        placeholder,
        disabled,
        background,
        min,
        max
    }
) => {
    return (
        <>
            {
                (type === 'text' || type === 'email' || type === undefined) &&
                <_StyledText
                    {...field}
                    disabled={disabled}
                    placeholder={placeholder}
                    background={background}
                />
            }
            {
                (type === 'password') &&
                <_StyledPassword
                    {...field}
                    disabled={disabled}
                    placeholder={placeholder}
                    background={background}
                />
            }
            {
                (type === 'number') &&
                <_StyledNumber
                    {...field}
                    disabled={disabled}
                    placeholder={placeholder}
                    min={min}
                    max={max}
                    formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={(value: string) => value.replace(/\$\s?|(,*)/g, '')}
                    background={background}
                />
            }
        </>
    );
};

export default StyledInput;

interface _StyledInput extends InputProps {
    background?: string;
}

const baseStyles = css`
  border: solid 2px #e5e6eb;
  border-radius: 5px;
  padding: 16px 20px;
  font-size: 15px;
  width: 100%;
`;

const _StyledText = styled(AntInput)<_StyledInput>`
  background: ${(props) => props.background || "#ffffff"};
  ${baseStyles}
`;

const _StyledPassword = styled(AntPassword)<_StyledInput>`
  background: ${(props) => props.background || "#ffffff"};
  ${baseStyles}
`;

const _StyledNumber = styled(AntNumber)<_StyledInput>`
  background: ${(props) => props.background || "#ffffff"};
  ${baseStyles}
`;