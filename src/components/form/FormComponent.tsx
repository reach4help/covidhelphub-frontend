import React from 'react';
import { NavLink } from 'react-router-dom';
import './FormComponent.module.css';

const formTypes: {
  key: string;
  addr: string;
}[] = [
  { key: 'Beneficiaries', addr: '/form/beneficiaries' },
  { key: 'Volunteers', addr: '/form/volunteers' },
];

function FormComponent() {
  // const { url } = useRouteMatch();
  return (
    <div>
      <h1>Forms</h1>
      <ul>
        {formTypes.map((formType) => (
          <li key={formType.key}>
            <NavLink to={formType.addr}>{formType.key}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FormComponent;
