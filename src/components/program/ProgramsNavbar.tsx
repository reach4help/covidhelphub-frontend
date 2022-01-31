import React from 'react';
import { useRouteMatch, NavLink } from 'react-router-dom';
import Style from './ProgramsNavbar.module.css';

const programStages: {
  name: string;
  key: string;
}[] = [
  { name: 'Open', key: 'open' },
  { name: 'Matching', key: 'matching' },
  { name: 'Scheduled', key: 'scheduled' },
  { name: 'In Progress', key: 'inprogress' },
  { name: 'Closed', key: 'closed' },
  { name: 'Canceled', key: 'canceled' },
];

function ProgramsNavbar() {
  const { url } = useRouteMatch();
  return (
    <div className={Style.programsNavbar}>
      {programStages.map((programStage) => (
        <NavLink
          key={programStage.key}
          activeClassName={Style.active}
          to={`${url}/${programStage.key}`}
          data-testid={programStage.key}
        >
          {programStage.name}
        </NavLink>
      ))}
    </div>
  );
}

export default ProgramsNavbar;
