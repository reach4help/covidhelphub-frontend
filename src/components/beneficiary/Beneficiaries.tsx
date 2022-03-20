import React from 'react';
import Table from '../../react-table/Table';
import { tableRows, tableColumns } from './data';

export default function Beneficiaries() {
  const data = React.useMemo(() => tableRows, []);
  const columns = React.useMemo(() => tableColumns, []);

  return (
    <div>
      Beneficiaries
      <Table columns={columns} data={data} />
    </div>
  );
}
