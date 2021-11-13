import React from "react";
import Style from "../formikStyle.module.css";
import { FormField } from "../types";
import { Field, ErrorMessage } from "formik";

interface Props {
    formField: FormField;
}

function SelectComponent(props: Props) {
    const { formField } = props;
    return (
        <>
            <label>
                <span className={formField.required ? Style.requiredLabel : ""}>
                    {formField.label}
                </span>
                <span className={formField.shortStyle ? Style.shortInput : Style.longInput}>
                    <Field
                        type={formField.type}
                        name={formField.name}
                        placeholder={formField.placeholder}
                    />
                </span>
                <div className={`${Style.errorMessage} ${Style.textInput}`}>
                    <ErrorMessage name={formField.name} />
                </div>
            </label>
        </>
    );
}

export default SelectComponent;
