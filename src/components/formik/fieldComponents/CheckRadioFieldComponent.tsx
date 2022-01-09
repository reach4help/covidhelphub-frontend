/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Field, ErrorMessage } from 'formik';
import Style from '../formikStyle.module.css';
import { FormField } from '../types';
import SpanIfText from './helpers/SpanIfText';

interface Props {
  formField: FormField;
}

function CheckRadioFieldComponent(props: Props) {
  const { formField } = props;
  return (
    <fieldset>
      <legend className={formField.required ? Style.requiredLabel : ''}>
        {formField.label}
      </legend>
      {SpanIfText(formField.explainationText)}
      <div className={Style.optionList}>
        {formField.options?.map((option) => (
          <label key={option.value}>
            <div className={Style.option}>
              <Field
                type={formField.type}
                name={formField.name}
                value={option.value}
              />
              <span>{option.label}</span>
            </div>
          </label>
        ))}
      </div>
      <div className={Style.errorMessage}>
        <ErrorMessage name={formField.name} />
      </div>
    </fieldset>
  );
}

export default CheckRadioFieldComponent;
