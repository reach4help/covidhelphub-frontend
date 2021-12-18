import React from 'react';
import Style from '../formikStyle.module.css';
import {
  textFieldSet,
  checkRadioFieldSet,
  selectFieldSet,
  FormField,
} from '../types';

import CheckRadioFieldComponent from './CheckRadioFieldComponent';
import TextFieldComponent from './TextFieldComponent';
import SelectComponent from './SelectComponent';

interface Props {
  formField: FormField;
}

function FieldComponentWrapper(component?: JSX.Element) {
  if (!component) {
    return null;
  }
  return <div className={Style.formField}>{component}</div>;
}

function FieldComponent(props: Props) {
  const { formField } = props;

  let component: JSX.Element | undefined;

  if (textFieldSet.has(formField.type)) {
    component = <TextFieldComponent formField={formField} />;
  } else if (checkRadioFieldSet.has(formField.type)) {
    component = <CheckRadioFieldComponent formField={formField} />;
  } else if (selectFieldSet.has(formField.type)) {
    return FieldComponentWrapper(component);
  }
  if (selectFieldSet.has(formField.type)) {
    component = <SelectComponent formField={formField} />;
  }
  return FieldComponentWrapper(component);
}

export default FieldComponent;
