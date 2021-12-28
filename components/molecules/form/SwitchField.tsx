import React, {FC} from 'react';
import StyledSwitch, {IPropsSwitch} from "../../atoms/form/StyledSwitch";
import {Control, Controller} from "react-hook-form";
import StyledLabel from "../../atoms/form/StyledLabel";
import StyledError from "../../atoms/form/StyledError";

interface IProps extends IPropsSwitch {
    control: Control;
    label?: string;
    name: string;
    errorMessage?: string;
    defaultValue: boolean;
}

const SwitchField: FC<IProps> = (
    {
        control,
        label,
        name,
        errorMessage,
        chkLabel,
        unChkLabel,
        defaultValue
    }
) => {
    return (
        <Controller
            control={control}
            name={name}
            defaultValue={defaultValue}
            render={({field}) => (
                <StyledLabel label={label}>
                    <StyledSwitch
                        field={field}
                        chkLabel={chkLabel}
                        unChkLabel={unChkLabel}
                    />
                    <StyledError message={errorMessage}/>
                </StyledLabel>
            )}
        />
    );
};

export default SwitchField;