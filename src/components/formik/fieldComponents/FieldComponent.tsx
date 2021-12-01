import React from 'react';
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

function FieldComponent(props: Props) {
  const { formField } = props;

  if (textFieldSet.has(formField.type)) {
    return <TextFieldComponent formField={formField} />;
  }
  if (checkRadioFieldSet.has(formField.type)) {
    return <CheckRadioFieldComponent formField={formField} />;
  }
  if (selectFieldSet.has(formField.type)) {
    return <SelectComponent formField={formField} />;
  }
  return null;
}

export default FieldComponent;
