import React, {FC} from 'react';
import {Checkbox as AntCheckbox} from "antd";
import styled from "styled-components";

export interface IPropsCheckbox {
    field?: any;
    options?: { value: string; label: string }[];
    value?: any;
    onChange?: (value: any) => void;
}

const StyledCheckbox: FC<IPropsCheckbox> = (
    {
        field,
        options,
        value,
        onChange
    }
) => {
    return (
        <>
            {
                value && (
                    <_StyledCheckbox
                        {...field}
                        onChange={(e) => {
                            field.onChange(e);
                        }}
                    >
                        {value}
                    </_StyledCheckbox>
                )
            }
            {
                !value && (
                    <_StyledCheckbox
                        {...field}
                        options={options}
                        onChange={(e) => {
                            field.onChange(e);
                        }}
                    />
                )
            }
        </>
    );
};

export default StyledCheckbox;

const _StyledCheckbox = styled(AntCheckbox.Group)`

`;