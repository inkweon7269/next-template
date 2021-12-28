import React, {FC} from 'react';
import {Input as AntInput} from "antd";
import {InputProps} from "antd";
import styled, {css} from "styled-components";

const AntTextArea = AntInput.TextArea;

export interface IPropsTextArea {
    field?: any;
    placeholder?: string;
    disabled?: boolean;
    background?: string;
}

const StyledTextArea: FC<IPropsTextArea> = (
    {
        field,
        placeholder,
        disabled,
        background,
    }
) => {
    return (
        <_StyledTextArea
            {...field}
            disabled={disabled}
            placeholder={placeholder}
            background={background}
        />
    );
};

export default StyledTextArea;

interface _StyledTextArea extends InputProps {
    background?: string;
}

const baseStyles = css`
  border: solid 2px #e5e6eb;
  border-radius: 5px;
  padding: 16px 20px;
  font-size: 15px;
  width: 100%;
  resize: none;
`;

const _StyledTextArea = styled(AntTextArea)<_StyledTextArea>`
  background: ${(props) => props.background || "#ffffff"};
  ${baseStyles}
`;