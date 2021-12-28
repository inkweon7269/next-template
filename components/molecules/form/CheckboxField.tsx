import React, {FC} from 'react';
import StyledCheckbox, {IPropsCheckbox} from "../../atoms/form/StyledCheckbox";
import {Control, Controller} from "react-hook-form";
import StyledLabel from "../../atoms/form/StyledLabel";
import StyledRadio from "../../atoms/form/StyledRadio";
import StyledError from "../../atoms/form/StyledError";

interface IProps extends IPropsCheckbox {
    control: Control;
    label?: string;
    name: string;
    errorMessage?: string;
    defaultValue?: string[];
}

const CheckboxField: FC<IProps> = ({
                                       control,
                                       label,
                                       name,
                                       options,
                                       value,
                                       onChange,
                                       errorMessage,
                                       defaultValue
                                   }) => {
    return (
        <Controller
            control={control}
            name={name}
            defaultValue={defaultValue}
            render={({field}) => (
                <StyledLabel label={label}>
                    <StyledCheckbox
                        field={field}
                        value={value}
                        options={options}
                        onChange={onChange}
                    />
                    <StyledError message={errorMessage}/>
                </StyledLabel>
            )}
        />
    );
};

export default CheckboxField;