/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Table from '../../react-table/Table';

export default function Beneficiaries() {
  const data = React.useMemo(
    () => [
      {
        id: '1',
        fn: 'Joshua',
        ln: 'J',
      },
      {
        id: '2',
        fn: 'Jenny',
        ln: 'Ren',
      },
      {
        id: '3',
        fn: 'Ethan',
        ln: 'Strominger',
      },
    ],
    [],
  );
  const columns = React.useMemo(
    () => [
      {
        Header: 'Id',
        accessor: 'id', // accessor is the "key" in the data
      },
      {
        Header: 'First name',
        accessor: 'fn',
      },
      {
        Header: 'Last Name',
        accessor: 'ln',
      },
    ],
    [],
  );

  return (
    <div
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    >
      Beneficiaries
      <Table columns={columns} data={data} />
    </div>
  );
}
