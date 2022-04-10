/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

// export const TableBody = styled.div`
//   max-height: 80vh;
//   width: 100%;
//   overflow: auto;
// `;

export const ColumnVisibilityCheckboxes = styled.select`
  display: flex;
  margin: 1rem;
`;

export const ResizeBar = styled.div`
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

// export const TD = styled.td`
//   padding: 0.4rem;
//   overflow: hidden;
//   font-size: 0.95rem;
// `;

// export const TH = styled.th`
//   padding: 0.4rem;
//   text-align: left;
//   font-size: 1rem;
//   font-weight: 600;
// `;
