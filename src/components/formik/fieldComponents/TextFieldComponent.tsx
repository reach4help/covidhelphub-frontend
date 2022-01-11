/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { Field, ErrorMessage } from 'formik';
import Style from '../formikStyle.module.css';
import { FormField } from '../types';
import SpanIfText from './helpers/SpanIfText';

interface Props {
  formField: FormField;
}

function TextFieldComponent(props: Props) {
  const { formField } = props;
  return (
    <label>
      <span className={formField.required ? Style.requiredLabel : ''}>
        {formField.label}
      </span>
      {SpanIfText(formField.explainationText)}
      <span
        className={formField.shortStyle ? Style.shortInput : Style.longInput}
      >
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
  );
}

export default TextFieldComponent;
