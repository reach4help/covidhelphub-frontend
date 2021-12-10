import React from 'react';
import Style from './FormSuccess.module.css';

function FormSubmitComponent() {
  return (
    <div className={Style.body}>
      <div className={Style.p}>
        <div className={Style.box}>
          <div className={Style.checkmarkCircle}>
            <i className={Style.checkmark}>✓</i>
          </div>
          <h1>Success</h1>
          <p>Your form has been submitted successfully.</p>
          <p>We will be in touch shortly!</p>
        </div>
      </div>
    </div>
  );
}

export default FormSubmitComponent;
