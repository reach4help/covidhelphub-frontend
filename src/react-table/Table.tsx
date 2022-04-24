import React from 'react';
import BTable from 'react-bootstrap/Table';
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
import Style from './tableStyle.module.css';
import GlobalFiltering from './GlobalFiltering';
import { ResizeBar } from './TableStyledComponents';

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
  const [visible, setVisible] = React.useState(false);
  return (
    <div className={Style.reactTablePageWraper}>
      {/* Global filtering */}
      <div className={Style.featuresWrapper}>
        <GlobalFiltering filter={globalFilter} setFilter={setGlobalFilter} />
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
        <div tabIndex={0} onFocus={() => setVisible(true)}>
          <div className={Style.showHidBtn}>Show/Hide columns &#9660;</div>
          <div
            style={visible ? { display: 'block' } : { display: 'none' }}
            className={Style.visible}
          >
            {allColumns.map((column) => (
              <div key={column.id}>
                <label onBlur={() => setVisible(false)}>
                  <input
                    type="checkbox"
                    tabIndex={-2}
                    {...column.getToggleHiddenProps()}
                  />
                  {column.Header}
                </label>
              </div>
            ))}
          </div>
        </div>
        {/* <button type="button"
        onClick={() => setVisible(!visible)}>Show/Hide Columns &#9660;</button> */}
      </div>
      {/* Hide/Show checkboxes */}
      {/* Table component */}
      <div className={Style.tableContainer}>
        <BTable className={Style.table} {...getTableProps()}>
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
                        // eslint-disable-next-line no-console
                        console.log(column);
                        return (
                          <Draggable
                            key={column.id}
                            draggableId={column.id}
                            index={index}
                            // isDragDisabled={column?.accessor}
                          >
                            {(provided, snapshot) => (
                              <th
                                {...column.getHeaderProps()}
                                className={Style.th || 'cell header'}
                              >
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
                                            <span
                                              className={Style.sortingArrow}
                                            >
                                              {'⬆  '}
                                            </span>
                                          ) : (
                                            <span
                                              className={Style.sortingArrow}
                                            >
                                              {'⬇  '}
                                            </span>
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
          <tbody className={Style.tbody} {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row);
              return (
                // eslint-disable-next-line react/no-array-index-key
                <tr className={Style.tr} {...row.getRowProps()} key={index}>
                  {row.cells.map((cell) => (
                    <td className={Style.td} {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </BTable>
      </div>
    </div>
  );
}

export default Table;
