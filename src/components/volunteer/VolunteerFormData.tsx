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

export const VOLUNTEER_FORM: FormField[] = [
  {
    type: 'text',
    name: 'name',
    label: 'Full Name',
    required: true,
    placeholder: 'Full Name',
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
    type: 'checkbox',
    name: 'languages',
    label: 'Languages spoken with conversational proficiency',
    options: [
      {
        label: 'English',
        value: 'english',
      },
      {
        label: 'French',
        value: 'french',
      },
    ],
    sectionTitle: 'Personal Information',
  },
  {
    type: 'checkbox',
    name: 'offer',
    label: 'What I would like to do:',
    required: true,
    options: [
      {
        label: 'Run grocery shopping errands',
        value: 'grocery',
      },
      {
        label: 'Make phone calls to elderly people',
        value: 'phone',
      },
      {
        label: 'Take someone to vaccination appointment',
        value: 'vaccine',
      },
      {
        label: 'Participate in Walk & Talk Program',
        value: 'walk&talk',
      },
      {
        label: 'Participate in Wise Connections seniors tech training program',
        value: 'tech',
      },
    ],
    sectionTitle: 'Volunteering Information',
  },
  {
    type: 'number',
    name: 'time',
    label: 'Time commitment per week (approximate):',
    placeholder: 'Hours',
    shortStyle: true,
    sectionTitle: 'Volunteering Information',
  },
  {
    type: 'radio',
    name: 'license',
    label: "Do you have access to a vehicle and/or have a driver's license?",
    options: [
      {
        label: 'I have a car and a license',
        value: 'carlicense',
      },
      {
        label: 'I have another vehicle type and a license',
        value: 'otherlicense',
      },
      {
        label: 'I have a license but no vehicle',
        value: 'license',
      },
      {
        label: 'I have a bike',
        value: 'bike',
      },
      {
        label: 'I do not have a vehicle or license',
        value: 'none',
      },
    ],
    sectionTitle: 'Volunteering Information',
  },
  {
    type: 'radio',
    name: 'covid',
    label:
      'Are you currently sick with COVID-19 or experiencing any COVID-19 symptoms?',
    required: true,
    options: YES_NO_OPTIONS,
    sectionTitle: 'Covid-19 Health Information',
  },
  {
    type: 'radio',
    name: 'contactedCovid',
    label:
      'Have you been in close contact with someone with COVID-19 or someone who may have COVID-19?',
    required: true,
    options: YES_NO_OPTIONS,
    sectionTitle: 'Covid-19 Health Information',
  },
  {
    type: 'radio',
    name: 'travelledCovid',
    label:
      'Have you travelled abroad in the past two weeks or been in close contact with someone who has?',
    required: true,
    options: YES_NO_OPTIONS,
    sectionTitle: 'Covid-19 Health Information',
  },
];

export const VOLUNTEER_SCHEMA = Yup.object().shape({
  name: Yup.string().required('Please enter your name'),
  email: Yup.string()
    .required('Please enter your email')
    .email('Please enter a valid email'),
  phone: Yup.string(),
  address: Yup.string(),
  postal: Yup.string()
    .required('Please enter a Postal code or Zip code')
    .matches(
      /[a-zA-Z][0-9][a-zA-Z] ?[a-zA-Z][0-9][a-zA-Z]|([a-zA-Z]{2})?[0-9]{5}/,
      'Please enter a valid Postal code or Zip code',
    ),
  // eslint-disable-next-line react/forbid-prop-types
  languages: Yup.array(),
  offer: Yup.array().min(1, 'Please check at least one option'),
  time: Yup.number().min(0).max(168),
  license: Yup.string(),
  covid: Yup.string().required('Please select an option'),
  contactedCovid: Yup.string().required('Please select an option'),
  travelledCovid: Yup.string().required('Please select an option'),
});

export const VOLUNTEER_INITAL_VALUES = {
  name: '',
  email: '',
  phone: '',
  address: '',
  postal: '',
  languages: [],
  offer: [],
  time: '',
  license: '',
  covid: '',
  contactedCovid: '',
  travelledCovid: '',
};
