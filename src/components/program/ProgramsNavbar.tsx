import React from 'react';
import { useRouteMatch, NavLink } from 'react-router-dom';
import Style from './ProgramsNavbar.module.css';

// const programStages: {
//   name: string;
//   key: string;
//   styleparameter:string;
// }[] = [
//   { name: 'Open', key: 'open', styleparameter: 'start' },
//   { name: 'Matching', key: 'matching', styleparameter: 'mid' },
//   { name: 'Scheduled', key: 'scheduled', styleparameter: 'mid' },
//   { name: 'In Progress', key: 'inprogress', styleparameter: 'mid' },
//   { name: 'Closed', key: 'closed', styleparameter: 'mid' },
//   { name: 'Canceled', key: 'canceled', styleparameter: 'end' },
// ];

function ProgramsNavbar() {
  const { url } = useRouteMatch();
  return (
    <div className={Style.programsNavbar}>
      <NavLink
        key="open"
        activeClassName={Style.start}
        to={`${url}/open`}
        data-testid="open"
      >
        Open
      </NavLink>

      <NavLink
        key="matching"
        activeClassName={Style.mid}
        to={`${url}/matching`}
        data-testid="matching"
      >
        Matching
      </NavLink>

      <NavLink
        key="scheduled"
        activeClassName={Style.mid}
        to={`${url}/scheduled`}
        data-testid="scheduled"
      >
        Scheduled
      </NavLink>

      <NavLink
        key="inprogress"
        activeClassName={Style.mid}
        to={`${url}/inprogress`}
        data-testid="inprogress"
      >
        In Progress
      </NavLink>

      <NavLink
        key="closed"
        activeClassName={Style.end}
        to={`${url}/closed`}
        data-testid="closed"
      >
        Closed
      </NavLink>

      {/* {programStages.map((programStage) => (
        <NavLink
          key={programStage.key}
          activeClassName={Style.activess}
          to={`${url}/${programStage.key}`}
          data-testid={programStage.key}
        >
          {programStage.name}
        </NavLink>
      ))} */}
    </div>
  );
}

export default ProgramsNavbar;
