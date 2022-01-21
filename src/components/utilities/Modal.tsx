import React from 'react';
import reactDom from 'react-dom';
import styled from 'styled-components';
import closeBtnImg from '../../assets/Popup-close-button.svg';

interface Props {
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
}

// Styled component for backdrop
const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999 !important;
`;

// Styled component for the popup box
const PopupDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 34.25rem;
  max-width: 59.9rem;
  min-height: 20rem;
  max-height: 78vh;
  border-radius: 4px;
  padding: 3.125rem 1.875rem;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
  background-color: #f2f2f2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: none;

  z-index: 9999 !important;

  & h3 {
    font-family: Roboto;
    font-weight: 700;
    font-size: 1.5rem;
    color: #333333;
    margin: 0 0 2rem;
  }
`;

// Styled component for the close (cross) button
const CloseButton = styled.button`
  border: none;
  background-color: inherit;
  width: 1.125rem;
  height: 1.125rem;
  background-image: url(${closeBtnImg});
  position: absolute;
  top: 1.875rem;
  right: 1.875rem;
  cursor: pointer;

  -moz-transition: all 0.1s ease-out;
  -webkit-transition: all 0.1s ease-out;
  transition: all 0.1s ease-out;

  /* Change as per final design */
  &:hover {
    transform: scale(1.15);
  }
`;

// React component for the Popup box
function Popup({ title, onClose, children }: Props) {
  return (
    <PopupDiv>
      <CloseButton aria-label="close button" type="button" onClick={onClose} />
      <h3>{title}</h3>
      <div>{children}</div>
    </PopupDiv>
  );
}

// Target elements in index.html for React Portal
const portalBackdropEl: Element = document.querySelector('#root-backdrop')!;
const portalPopupEl: Element = document.querySelector('#root-popup')!;

// Combined React Component: Popup box + Backdrop
export default function Modal({ title, onClose, children }: Props) {
  return (
    <>
      {reactDom.createPortal(<Backdrop />, portalBackdropEl)}
      {reactDom.createPortal(
        <Popup title={title} onClose={onClose}>
          {children}
        </Popup>,
        portalPopupEl,
      )}
    </>
  );
}

Popup.defaultProps = {
  title: '',
};

Modal.defaultProps = {
  title: '',
};
