import React from 'react';
import styled from 'styled-components';
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

const ColumnVisibilityCheckboxes = styled.div`
  display: flex;
  margin: 1rem;
`;

function Table({ columns, data }: { columns: any; data: any }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    allColumns,
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
      <ColumnVisibilityCheckboxes>
        {allColumns.map((column) => (
          <div key={column.id}>
            <label>
              <input type="checkbox" {...column.getToggleHiddenProps()} />
              {column.Header}
            </label>
          </div>
        ))}
      </ColumnVisibilityCheckboxes>
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
