/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { Field, ErrorMessage } from 'formik';
import Style from '../formikStyle.module.css';
import { FormField } from '../types';
import SpanIfText from './helpers/SpanIfText';

interface Props {
  formField: FormField;
}

function SelectComponent(props: Props) {
  const { formField } = props;
  // console.log(formField)
  return (
    <label>
      <span className={formField.required ? Style.requiredLabel : ''}>
        {formField.label}
      </span>
      {SpanIfText(formField.explainationText)}
      <span
        className={formField.shortStyle ? Style.shortInput : Style.longInput}
      >
        <Field as="select" name={formField.name}>
          {formField.options?.map((item) => (
            <option value={item.value}>{item.label}</option>
          ))}
        </Field>
      </span>
      <div className={`${Style.errorMessage} ${Style.textInput}`}>
        <ErrorMessage name={formField.name} />
      </div>
    </label>
  );
}

export default SelectComponent;
