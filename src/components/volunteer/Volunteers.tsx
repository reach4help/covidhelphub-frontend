import React from 'react';
import Table from '../../react-table/Table';

import { tableRows, tableColumns } from './data';

export default function Volunteers() {
  const data = React.useMemo(() => tableRows, []);

  const columns = React.useMemo(() => tableColumns, []);

  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
}
