// input fields

export const textFieldSet = new Set([
  'color',
  'date',
  'datetime-local',
  'email',
  'month',
  'number',
  'password',
  'tel',
  'text',
  'time',
  'url',
  'week',
]);

// checkbox and radio
export const checkRadioFieldSet = new Set(['checkbox', 'radio']);

// checkbox
export const multiFieldSet = new Set(['checkbox']);

// select
export const selectFieldSet = new Set(['select'])

export interface FieldOption {
  label: string;
  value: string;
  default?: boolean;
}

export type FormField = {
  type: string;
  name: string;
  label: string;
  options?: FieldOption[];
  list?: string[];
  placeholder?: string | number;
  required?: boolean;
  shortStyle?: boolean;
};

export interface FormSection {
  id: string;
  label: string;
  formFields: FormField[];
}
