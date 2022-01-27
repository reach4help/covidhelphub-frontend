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
  useGlobalFilter,
} from 'react-table';
import GlobalFiltering from './GlobalFiltering';

function Table({ columns, data }: { columns: any; data: any }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    { columns, data },
    useFilters,
    useGroupBy,
    useGlobalFilter,
    useSortBy,
    useExpanded,
    usePagination,
  );
  const { globalFilter } = state;
  return (
    <>
      <GlobalFiltering filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {
                      // eslint-disable-next-line no-nested-ternary
                      column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''
                    }
                  </span>
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
    </>
  );
}

export default Table;
