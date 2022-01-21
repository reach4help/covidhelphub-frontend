import React from 'react';
import reactDom from 'react-dom';
import Style from './Modal.module.css';

interface Props {
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
}

function Backdrop() {
  return <div className={Style.backdrop} />;
}

function Popup({ title, onClose, children }: Props) {
  return (
    <div className={Style.popup}>
      <button
        aria-label="close button"
        type="button"
        className={Style.closeBtn}
        onClick={onClose}
      />
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

const portalBackdropEl: Element = document.querySelector('#root-backdrop')!;
const portalPopupEl: Element = document.querySelector('#root-popup')!;

function Modal({ title, onClose, children }: Props) {
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

export default Modal;
