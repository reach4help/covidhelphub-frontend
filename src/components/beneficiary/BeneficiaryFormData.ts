import * as Yup from 'yup';
import { FieldOption, FormField } from '../formik/types';

const YES_NO_OPTIONS: FieldOption[] = [
  {
    label: 'Yes',
    value: 'true',
  },
  {
    label: 'No',
    value: 'false',
  },
];

export const BENEFICIARY_FORM: FormField[] = [
  {
    type: 'text',
    name: 'name',
    label: 'Full Name',
    required: true,
    placeholder: 'Full Name',
    sectionTitle: 'Personal Information',
  },
  {
    type: 'text',
    name: 'address',
    label: 'Address',
    placeholder: 'Address',
    sectionTitle: 'Personal Information',
  },
  {
    type: 'text',
    name: 'postal',
    label: 'Postal Code',
    required: true,
    placeholder: 'Postal Code',
    shortStyle: true,
    sectionTitle: 'Personal Information',
  },
  {
    type: 'email',
    name: 'email',
    label: 'Email',
    required: true,
    placeholder: 'Email',
    sectionTitle: 'Personal Information',
  },
  {
    type: 'tel',
    name: 'phone',
    label: 'Phone Number',
    placeholder: 'Phone Number',
    sectionTitle: 'Personal Information',
  },

  {
    type: 'date',
    name: 'dob',
    label: 'Date of birth',
    required: true,
    sectionTitle: 'Personal Information',
  },
  {
    type: 'select',
    name: 'acquisition',
    label: 'How did you hear about us?',
    options: [
      { label: '', value: '' },
      { label: 'Place 1', value: 'Place One' },
      { label: 'Place 2', value: 'Place Two' },
      { label: 'Place 3', value: 'Place Three' },
    ],
    sectionTitle: 'Personal Information',
  },
  {
    type: 'radio',
    name: 'weakImuneSystem',
    label: 'Do you have a weakened immune system?',
    required: true,
    options: YES_NO_OPTIONS,
    sectionTitle: 'Health Information',
  },
  {
    type: 'radio',
    name: 'chronicIllness',
    label: 'Do you have a chronic illness?',
    required: true,
    options: YES_NO_OPTIONS,
    sectionTitle: 'Health Information',
  },
  {
    type: 'radio',
    name: 'livingAlone',
    label: 'Do you live alone with a limited support network?',
    required: true,
    options: YES_NO_OPTIONS,
    sectionTitle: 'Health Information',
  },
  {
    type: 'radio',
    name: 'sickWithCovid',
    label: 'Are you currently sick or experiencing Covid-19 symptoms?',
    required: true,
    options: YES_NO_OPTIONS,
    sectionTitle: 'Health Information',
  },
  {
    type: 'text',
    name: 'beneficiariesText',
    label:
      'If you would like to explain your situation, or would like to share more details, please write it here.',
    placeholder: 'Miscellaneous',
    sectionTitle: 'Health Information',
  },
  {
    type: 'checkbox',
    name: 'helpType',
    label: 'What type of help do you need?',
    required: true,
    options: [
      {
        label: 'Vaccination',
        value: 'vaccination',
      },
      {
        label: 'Wellness Calls',
        value: 'wellnessCalls',
      },
      {
        label: 'Grocery Delivery',
        value: 'grocery',
      },
    ],
    sectionTitle: 'Program Details',
  },
  {
    type: 'textList',
    name: 'grocery',
    label: 'Grocery delivery',
    explainationText: 'Enter your grocery list by category.',
    options: [
      {
        label: 'Canned and Packaged goods',
        value: 'packaged',
        placeholder:
          'If you want to buy canned or packaged goods, enter them here',
      },
      {
        label: 'Freezer and Refrigerated goods',
        value: 'freezer',
        placeholder:
          'If you want to buy freezer or refridgerated goods, enter them here',
      },
      {
        label: 'Fruits and Vegetables',
        value: 'produce',
        placeholder: 'If you want to buy fruits or vegetables, enter them here',
      },
      {
        label: 'Dairy and Eggs',
        value: 'diary',
        placeholder: 'If you want to buy dairy or eggs, enter them here',
      },
      {
        label: 'Meat',
        value: 'meat',
        placeholder: 'If you want to buy meat, enter it here',
      },
      {
        label: 'Bread',
        value: 'bread',
        placeholder: 'If you want to buy bread, enter it here',
      },
    ],
    sectionTitle: 'Program Details',
  },
];

export const BENEFICIARY_SCHEMA = Yup.object().shape({
  name: Yup.string().required('Please enter your name'),
  address: Yup.string(),
  postal: Yup.string()
    .required('Please enter a Postal code or Zip code')
    .matches(
      /[a-zA-Z][0-9][a-zA-Z] ?[a-zA-Z][0-9][a-zA-Z]|([a-zA-Z]{2})?[0-9]{5}/,
      'Please enter a valid Postal code or Zip code',
    ),
  email: Yup.string()
    .required('Please enter your email')
    .email('Please enter a valid email'),
  phone: Yup.string(),
  dob: Yup.string().required('Please select your date of birth'),
  weakImuneSystem: Yup.string().required('Please select an option'),
  chronicIllness: Yup.string().required('Please select an option'),
  livingAlone: Yup.string().required('Please select an option'),
  sickWithCovid: Yup.string().required('Please select an option'),
  helpType: Yup.array().min(1, 'Please select at least one option'),
  packaged: Yup.string(),
  freezer: Yup.string(),
  produce: Yup.string(),
  diary: Yup.string(),
  meat: Yup.string(),
  bread: Yup.string(),
});

export const BENEFICIARY_INITIAL_VALUES = {
  name: '',
  address: '',
  postal: '',
  email: '',
  phone: '',
  dob: '',
  weakImuneSystem: '',
  chronicIllness: '',
  livingAlone: '',
  sickWithCovid: '',
  helpType: [],
  packaged: '',
  freezer: '',
  produce: '',
  diary: '',
  meat: '',
  bread: '',
};
