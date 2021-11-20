import * as Yup from 'yup';
import { FieldOption, FormField, FormSection } from '../formik/types';

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

const EXAMPLE_PERSONAL: FormField[] = [
    {
        type: 'text',
        name: 'name',
        label: 'Full Name',
        required: true,
        placeholder: 'Full Name',
    },
    {
        type: 'text',
        name: 'address',
        label: 'Address',
        placeholder: 'Address',
    },
    {
        type: 'text',
        name: 'postal',
        label: 'Postal Code',
        required: true,
        placeholder: 'Postal Code',
        shortStyle: true,
    },
    {
        type: 'email',
        name: 'email',
        label: 'Email',
        required: true,
        placeholder: 'Email',
    },
    {
        type: 'tel',
        name: 'phone',
        label: 'Phone Number',
        placeholder: 'Phone Number',
    },

    {
        type: 'date',
        name: 'dob',
        label: 'Date of birth',
        required: true,
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
        ]
    },
];

const EXAMPLE_HEALTH: FormField[] = [
    {
        type: 'radio',
        name: 'weakImuneSystem',
        label: 'Do you have weakened Immune System?',
        required: true,
        options: YES_NO_OPTIONS,
    },
    {
        type: 'radio',
        name: 'chronicIllness',
        label: 'Do you have Chronic Illness?',
        required: true,
        options: YES_NO_OPTIONS,
    },
    {
        type: 'radio',
        name: 'livingAlone',
        label: 'Do you live alone with limited support network?',
        required: true,
        options: YES_NO_OPTIONS,
    },
    {
        type: 'radio',
        name: 'sickWithCovid',
        label: 'Are you currently sick or with Covid-19 symptoms?',
        required: true,
        options: YES_NO_OPTIONS,
    },
    {
        type: 'text',
        name: 'beneficiariesText',
        label: 'If you would like to explain your situation, or would like to share more details, please write it here.',
        placeholder: 'Miscellaneous',
    },
];

const EXAMPLE_PROGRAM_DETAILS: FormField[] = [
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
    },
    {
        type: 'checkbox',
        name: 'grocery',
        label: "Grocery delivery",
        options: [
            {
                label: 'Canned and packaged goods',
                value: 'packaged',
            },
            {
                label: 'Freezer/Refrigerated goods',
                value: 'freezers',
            },
            {
                label: 'Fruits and vegetables',
                value: 'fruits',
            },
            {
                label: 'Dairy and eggs',
                value: 'diary',
            },
            {
                label: 'Meat',
                value: 'meat',
            },
            {
                label: 'Bread',
                value: 'bread',
            },
            {
                label: 'Yougurt, Tea, Coffee',
                value: 'yougurt',
            },
        ],
    },
];


export const VOLUNTEER_FORM: FormSection[] = [
    {
        id: 'personal-info',
        label: 'Personal Details',
        formFields: EXAMPLE_PERSONAL,
    },
    {
        id: 'health-info',
        label: 'Health Details',
        formFields: EXAMPLE_HEALTH,
    },
    {
        id: 'program-info',
        label: 'Program Details',
        formFields: EXAMPLE_PROGRAM_DETAILS,
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
    languages: Yup.array(),
    offer: Yup.array().min(1, 'Please check at least one option'),
    time: Yup.number()
        .min(0)
        .max(168),
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
