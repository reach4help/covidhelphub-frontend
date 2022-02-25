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
  background: rgb(20, 20, 20);
  width: 6px;
  border-radius: 3px;
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

const TD = styled.td`
  padding: 0.4rem;
  overflow: hidden;
  font-size: 0.95rem;
`;

const TH = styled.th`
  padding: 0.4rem;
  text-align: left;
  font-size: 1rem;
  font-weight: 600;
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
                <TH {...column.getHeaderProps()}>
                  <span
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    style={{ display: 'inline', cursor: 'pointer' }}
                  >
                    {column.render('Header')}
                    <span>
                      {
                        // eslint-disable-next-line no-nested-ternary
                        column.isSorted ? (
                          column.isSortedDesc ? (
                            <span style={{ color: 'rgba(20,20,20,0.7)' }}>
                              {'  ⬇'}
                            </span>
                          ) : (
                            <span style={{ color: 'rgba(20,20,20,0.7)' }}>
                              {'  ⬆'}
                            </span>
                          )
                        ) : (
                          ''
                        )
                      }
                    </span>
                  </span>
                  <ResizeBar {...column.getResizerProps()} />
                </TH>
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
                  <TD {...cell.getCellProps()}>{cell.render('Cell')}</TD>
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
