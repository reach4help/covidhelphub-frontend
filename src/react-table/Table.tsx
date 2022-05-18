import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {
  useTable,
  useGroupBy,
  useFilters,
  useSortBy,
  useBlockLayout,
  useGlobalFilter,
  useResizeColumns,
  useColumnOrder,
} from 'react-table';
import GlobalFiltering from './GlobalFiltering';
import {
  FeaturesWrapper,
  ResizeBar,
  ShowHideBtn,
  ColumnsListBox,
  StyledTable,
  TableWrapper,
  SortingArrowDESC,
  SortingArrowASC,
  ComponentWrapper,
} from './TableStyledComponents';

// Item Style for Drag and Drop styling
const itemStyle = (
  { isDragging, isDropAnimating }: { isDragging: any; isDropAnimating: any },
  draggableStyle: any,
) => ({
  ...draggableStyle, // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  color: isDragging ? 'red' : '', // change background colour if dragging

  ...(!isDragging && { transform: 'translate(0,0)' }),
  ...(isDropAnimating && { transitionDuration: '0.25s' }),
});

// Table Component
function Table({ columns, data }: { columns: any; data: any }) {
  // column size
  const defaultColumn = React.useMemo(
    () => ({
      width: 225,
    }),
    [],
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setColumnOrder,
    state,
    setGlobalFilter,
    allColumns,
  } = useTable(
    { columns, data, defaultColumn },
    useColumnOrder,
    useFilters,
    useGroupBy,
    useGlobalFilter,
    useSortBy,
    useBlockLayout,
    useResizeColumns,
  );
  const { globalFilter } = state;
  const currentColOrder = React.useRef<any>();
  const [columnsListToShowHideColumns, setColumnsListToShowHideColumns] = React.useState(false);
  return (
    <ComponentWrapper>
      {/* Global filtering */}
      <FeaturesWrapper>
        <GlobalFiltering filter={globalFilter} setFilter={setGlobalFilter} />
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
        <div tabIndex={0} onFocus={() => setColumnsListToShowHideColumns(true)}>
          <ShowHideBtn>Show/Hide columns &#9660;</ShowHideBtn>
          <ColumnsListBox
            style={
              columnsListToShowHideColumns
                ? { display: 'block' }
                : { display: 'none' }
            }
          >
            {allColumns.map((column) => (
              <div key={column.id}>
                <label onBlur={() => setColumnsListToShowHideColumns(false)}>
                  <input
                    type="checkbox"
                    tabIndex={-2}
                    {...column.getToggleHiddenProps()}
                  />
                  {column.Header}
                </label>
              </div>
            ))}
          </ColumnsListBox>
        </div>
        {/* <button type="button"
        onClick={() => setVisible(!visible)}>Show/Hide Columns &#9660;</button> */}
      </FeaturesWrapper>
      {/* Hide/Show checkboxes */}
      {/* Table component */}
      <TableWrapper>
        <StyledTable {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <DragDropContext
                onDragStart={() => {
                  currentColOrder.current = allColumns?.map((o: any) => o.id);
                }}
                onDragUpdate={(dragUpdateObj: any) => {
                  const colOrder = [...currentColOrder.current];
                  const sIndex = dragUpdateObj.source.index;
                  const dIndex = dragUpdateObj.destination
                    && dragUpdateObj.destination.index;

                  if (
                    typeof sIndex === 'number'
                    && typeof dIndex === 'number'
                  ) {
                    colOrder.splice(sIndex, 1);
                    colOrder.splice(dIndex, 0, dragUpdateObj.draggableId);
                    setColumnOrder(colOrder);
                  }
                }}
                onDragEnd={() => null}
              >
                <Droppable droppableId="droppable" direction="horizontal">
                  {(droppableProvided) => (
                    <tr
                      {...headerGroup.getHeaderGroupProps()}
                      ref={droppableProvided.innerRef}
                    >
                      {headerGroup.headers.map((column, index) => {
                        // eslint-disable-next-line no-console
                        console.log(
                          columns.accessor ? 'column' : 'column group',
                        );
                        return (
                          <Draggable
                            key={column.id}
                            draggableId={column.id}
                            index={index}
                            // isDragDisabled={column?.accessor}
                          >
                            {(provided, snapshot) => (
                              <th {...column.getHeaderProps()}>
                                <div
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  // {...extraProps}
                                  ref={provided.innerRef}
                                  style={{
                                    ...itemStyle(
                                      snapshot,
                                      provided.draggableProps.style,
                                    ),
                                  }}
                                >
                                  <span
                                    {...column.getHeaderProps(
                                      column.getSortByToggleProps(),
                                    )}
                                    style={{
                                      display: 'inline',
                                      cursor: 'pointer',
                                    }}
                                  >
                                    <span>
                                      {
                                        // eslint-disable-next-line no-nested-ternary
                                        column.isSorted ? (
                                          column.isSortedDesc ? (
                                            <SortingArrowDESC>
                                              {'⬆  '}
                                            </SortingArrowDESC>
                                          ) : (
                                            <SortingArrowASC>
                                              {'⬇  '}
                                            </SortingArrowASC>
                                          )
                                        ) : (
                                          ''
                                        )
                                      }
                                    </span>
                                    {column.render('Header')}
                                  </span>
                                </div>
                                <ResizeBar {...column.getResizerProps()} />
                              </th>
                            )}
                          </Draggable>
                        );
                      })}
                    </tr>
                  )}
                </Droppable>
              </DragDropContext>
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
        </StyledTable>
      </TableWrapper>
    </ComponentWrapper>
  );
}

export default Table;
