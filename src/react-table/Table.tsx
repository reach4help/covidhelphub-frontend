import React from 'react';
import styled from 'styled-components';
import {
  useTable,
  useGroupBy,
  useFilters,
  useSortBy,
  useBlockLayout,
  useGlobalFilter,
  useResizeColumns,
} from 'react-table';
import GlobalFiltering from './GlobalFiltering';

const ColumnVisibilityCheckboxes = styled.div`
  display: flex;
  margin: 1rem;
`;
// eslint-disable-next-line no-unused-vars
const ResizeBar = styled.div`
  display: inline-block;
  background: blue;
  width: 10px;
  height: 100%;
  position: absolute;
  right: 0px;
  top: 0px;
  transform: translateX(50%);
  z-index: 1;
  ${'' /* prevents from scrolling while dragging on touch devices */}
  touch-action:none;

  &.isResizing {
    background: red;
  }
`;

function Table({ columns, data }: { columns: any; data: any }) {
  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 30,
      width: 200,
      maxWidth: 400,
    }),
    [],
  );

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
    { columns, data, defaultColumn },
    useFilters,
    useGroupBy,
    useGlobalFilter,
    useSortBy,
    useBlockLayout,
    useResizeColumns,
  );
  const { globalFilter } = state;
  return (
    <>
      {/* Global filtering */}
      <GlobalFiltering filter={globalFilter} setFilter={setGlobalFilter} />
      {/* Hide/Show checkboxes */}
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
      {/* Table component */}
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            // eslint-disable-next-line react/no-array-index-key
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                // eslint-disable-next-line react/no-array-index-key
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <ResizeBar {...column.getResizerProps()} />
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
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              // eslint-disable-next-line react/no-array-index-key
              <tr {...row.getRowProps()} key={index}>
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
