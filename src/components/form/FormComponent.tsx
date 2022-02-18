import React from 'react';
import { NavLink } from 'react-router-dom';
import Style from './FormComponent.module.css';

const formTypes = [
  { key: 'Beneficiaries', addr: '/form/beneficiaries' },
  { key: 'Volunteers', addr: '/form/volunteers' },
];

function FormComponent() {
  return (
    <div>
      <h1>Forms</h1>
      <ul className={Style.form_options_outer}>
        {formTypes.map((formType) => (
          <li className={Style.form_options_inner} key={formType.key}>
            <NavLink to={formType.addr}>{formType.key}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FormComponent;
