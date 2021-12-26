import React from 'react';
import { Link } from 'react-router-dom';

function FormComponent() {
  return (
    <div>
      <Link to="/form/beneficiaries">Beneficiary forms</Link>
      <br />
      <Link to="/form/volunteers">Volunteer forms</Link>
    </div>
  );
}

export default FormComponent;
