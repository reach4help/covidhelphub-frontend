import React from 'react';
import Style from '../../formikStyle.module.css';

function SpanIfText(text?: string) {
  if (text) {
    return <span className={Style.explainationText}>{text}</span>;
  }
  return null;
}

export default SpanIfText;
