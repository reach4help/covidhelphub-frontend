/* eslint-disable indent */
// Name, Email, Phone, Postal Code, acquisition
const tableRows = [
  {
    id: 1,
    name: 'A12 BC',
    email: 'Joshua@email.com',
    phone: '+1657435678',
    postalCode: '10007',
    programs: 'Wellness Calls',
  },
  {
    id: 2,
    name: 'John Doe',
    email: 'ren.jenney@gmail.com',
    phone: '+1357475678',
    postalCode: 'M4V',
    programs: 'Vaccination',
  },
  {
    id: 3,
    name: 'Naa23 BN',
    email: 'neck.abd@gmail.com',
    phone: '+9647504315501',
    postalCode: '42001',
    programs: 'Grocery delivery: Canned and Packaged goods: Sparkling water',
  },
  {
    id: 4,
    name: 'VT AS',
    email: 'ashwinkjoseph@gmail.com',
    phone: '+156779875678',
    postalCode: 'P5S',
    programs: 'Wellness Calls',
  },
  {
    id: 5,
    name: 'P45 T',
    email: 'pmsfilipe1@gmail.com',
    phone: '+3890546789',
    postalCode: '9870F',
    programs: 'Vaccination',
  },
  {
    id: 6,
    name: 'Rt A2',
    email: 'shayan.chowdhury@gmail.com',
    phone: '+86475067890198765',
    postalCode: '18P1',
    programs: 'Grocery delivery: Meat',
  },
  {
    id: 7,
    name: 'Yayi T2',
    email: 'ethanstrominger2@gmail.com',
    phone: '+1657435678',
    postalCode: '10007',
    programs: 'Wellness Calls',
  },
  {
    id: 8,
    name: 'BA R5',
    email: 'bl100@wellesley.edu',
    phone: '+6879767475678',
    postalCode: 'M0076',
    programs: 'Grocery delivery: Eags',
  },
  {
    id: 9,
    name: 'Ot89 XY',
    email: 'lakshay.ag09@gmail.com',
    phone: '+89022267878121',
    postalCode: '0P01',
    programs: 'Grocery delivery: Bread, Eags, Vegetables',
  },
  {
    id: 10,
    name: 'S7y R12',
    email: 'shafaat.razin@gmail.com',
    phone: '+87654321989',
    postalCode: 'U10T',
    programs: 'Vaccination',
  },
];

const tableColumns = [
  {
    Header: 'Name',
    accessor: 'name', // accessor is the "key" in the data
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Phone',
    accessor: 'phone',
  },
  {
    Header: 'Postal Code',
    accessor: 'postalCode',
  },
  {
    Header: 'Programs',
    accessor: 'programs',
  },
];

export { tableRows, tableColumns };
