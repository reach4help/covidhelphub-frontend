/* eslint-disable indent */

// Hardcoded data (Name, Email, Phone, Postal Code, Time Commitment)
const tableRows = [
  {
    id: 1,
    name: 'Joshua Joe',
    email: 'Joshua@email.com',
    phone: '+1657435678',
    postalCode: '10007',
    timeCommitment: new Date('2022-03-11').toString(),
  },
  {
    id: 2,
    name: 'Jenney Ren',
    email: 'ren.jenney@gmail.com',
    phone: '+1357475678',
    postalCode: 'M4V',
    timeCommitment: new Date('2022-01-21').toString(),
  },
  {
    id: 3,
    name: 'Neck Abd',
    email: 'neck.abd@gmail.com',
    phone: '+9647504315501',
    postalCode: '42001',
    timeCommitment: new Date('2022-06-15').toString(),
  },
  {
    id: 4,
    name: 'Joseph Ashwin',
    email: 'ashwinkjoseph@gmail.com',
    phone: '+156779875678',
    postalCode: 'P5S',
    timeCommitment: new Date('2022-02-08').toString(),
  },
  {
    id: 5,
    name: 'Pedro Filipe',
    email: 'pmsfilipe1@gmail.com',
    phone: '+3890546789',
    postalCode: '9870F',
    timeCommitment: new Date('2022-11-22').toString(),
  },
  {
    id: 6,
    name: 'Shayan Chowdhury',
    email: 'shayan.chowdhury@gmail.com',
    phone: '+86475067890198765',
    postalCode: '18P1',
    timeCommitment: new Date('2022-10-05').toString(),
  },
  {
    id: 7,
    name: 'Ethan Strominger',
    email: 'ethanstrominger2@gmail.com',
    phone: '+1657435678',
    postalCode: '10007',
    timeCommitment: new Date('2022-01-09').toString(),
  },
  {
    id: 8,
    name: 'Beracah Lam',
    email: 'bl100@wellesley.edu',
    phone: '+6879767475678',
    postalCode: 'M0076',
    timeCommitment: new Date('2022-04-01').toString(),
  },
  {
    id: 9,
    name: 'Lakshay Agrawal',
    email: 'lakshay.ag09@gmail.com',
    phone: '+89022267878121',
    postalCode: '0P01',
    timeCommitment: new Date('2022-12-25').toString(),
  },
  {
    id: 10,
    name: 'Shafaat Razin',
    email: 'shafaat.razin@gmail.com',
    phone: '+87654321989',
    postalCode: 'U10T',
    timeCommitment: new Date('2022-08-05').toString(),
  },
];

// Hard coded columns
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
    Header: 'Time Commitment',
    accessor: 'timeCommitment',
  },
];

export { tableRows, tableColumns };
