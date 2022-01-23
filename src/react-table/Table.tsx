/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint no-nested-ternary: "error" */
import React from 'react';

import {
  useTable,
  useGroupBy,
  useFilters,
  useSortBy,
  useExpanded,
  usePagination,
} from 'react-table';

function Table(Props: any) {
  const { columns, data } = Props;
  const {
    getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,
  } = useTable(
    { columns, data },
    useFilters,
    useGroupBy,
    useSortBy,
    useExpanded,
    usePagination,
  );

  return (
    <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                {/* <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                    </span> */}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
