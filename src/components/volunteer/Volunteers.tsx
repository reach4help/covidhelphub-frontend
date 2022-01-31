import React from 'react';
import Table from '../../react-table/Table';

import { tableRows, tableColumns } from './data';

export default function Volunteers() {
  const data = React.useMemo(() => tableRows, []);

  const columns = React.useMemo(() => tableColumns, []);

  return (
    <div
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    >
      Volunteers
      <Table columns={columns} data={data} />
    </div>
  );
}
