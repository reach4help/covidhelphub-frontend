/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

// export const TableBody = styled.div`
//   max-height: 80vh;
//   width: 100%;
//   overflow: auto;
// `;
export const ResizeBar = styled.div`
  display: inline-block;
  background: transparent;
  width: 10px;
  border-radius: 3px;
  height: 100%;
  position: absolute;
  right: 0px;
  top: 0px;
  transform: translateX(50%);
  z-index: 1;
  ${'' /* prevents from scrolling while dragging on touch devices */}
  touch-action:none;
`;

export const ComponentWrapper = styled.section`
  @supports (scrollbar-color: #adb5bd white) {
    * {
      scrollbar-color: #adb5bd white;
    }
  }

  @supports (scrollbar-width: 10px) {
    * {
      scrollbar-width: 10px;
    }
  }
`;

export const SortingArrowDESC = styled.span`
  color: orange;
  font-weight: 900;
`;

export const SortingArrowASC = styled.span`
  color: orange;
  font-weight: 900;
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow: auto;
  padding: 1rem 0.5rem;
  margin-bottom: 1rem;

  &::-webkit-scrollbar {
    height: 0.75rem;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #adb5bd;
    border-radius: 8px;
    margin: 1px;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
    border: none;
    padding: 0.4rem;
    border-radius: 8px;
  }
  @supports (scrollbar-color: #adb5bd white) {
    * {
      scrollbar-color: #adb5bd white;
    }
  }

  @supports (scrollbar-width: 10px) {
    * {
      scrollbar-width: 10px;
    }
  }
`;

export const StyledTable = styled.table`
  width: fit-content;
  margin: 0px;
  border: none;
  border-radius: 8px 8px 0 0;
  box-shadow: -3px -0px 8px rgba(0, 0, 0, 0.5);
  thead {
    tr {
      background-color: #36304a;
      color: #efefef;
      border: none;
      border-bottom: 1px solid #202020;

      &:first-child {
        border-radius: 8px 8px 0 0;
      }

      th {
        border: none;
        border-left: 1px solid black;
        font-weight: 400;
        word-spacing: 1px;
        letter-spacing: -0.22px;
        line-height: 1.75;
        padding: 4px 8px !important;
      }
    }
  }

  tbody {
    display: block;
    height: inherit;
    max-height: 65vh;
    overflow-y: auto;
    overflow-x: hidden;
    border: none;

    tr {
      color: #505050;
      border: none;
      border-bottom: 1px solid #aaaaaa;

      &:nth-child(even) {
        background-color: #eeeeee;
      }

      &:hover {
        background-color: #cdcdcd;
        color: #202020;
      }

      td {
        overflow: hidden;
        text-overflow: clip;
        padding: 4px 8px !important;
        line-height: 1.75;
        border: none;
        display: flex !important;
        align-items: center;
        word-spacing: 1px;
        letter-spacing: -0.22px;
      }
    }

    &::-webkit-scrollbar {
      width: 10px;
      border-radius: 8px;
      /* background-color: red; */
      margin-block: 0.5rem;
    }

    &::-webkit-scrollbar-track {
      background-color: white;
      /* border: 1px solid gray; */
      border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #adb5bd;
      border-radius: 8px;
    }
  }
`;

export const FeaturesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ShowHideBtn = styled.div`
  border: 0.75px solid gray;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  margin-right: 1rem;
  width: 180px;
  cursor: pointer;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  margin-left: 1rem;
  margin-right: 1rem;
  input {
    width: 40%;
    padding: 0.25rem;
    border: 0.5px solid gray;
    border-radius: 0.25rem;
  }
`;

export const ColumnsListBox = styled.div`
  position: fixed;
  background-color: white;
  padding: 0.5rem;
  z-index: 3;
  max-height: 250px;
  max-width: max-content;
  overflow: auto;
  box-shadow: -3px -0px 8px rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;

  div {
    label {
      display: flex;
      column-gap: 0.5rem;
      align-items: center;
    }
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
