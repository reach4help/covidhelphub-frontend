import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ProgramsNavbar from '../components/program/ProgramsNavbar';
import ProgramStageOpenComponent from '../components/program/program-stage/ProgramStageOpenComponent';
import ProgramStageMatchingComponent from '../components/program/program-stage/ProgramStageMatchingComponent';
import ProgramStageScheduledComponent from '../components/program/program-stage/ProgramStageScheduledComponent';
import ProgramStageInProgressComponent from '../components/program/program-stage/ProgramStageInProgressComponent';
import ProgramStageClosedComponent from '../components/program/program-stage/ProgramStageClosedComponent';
import ProgramStageCanceledComponent from '../components/program/program-stage/ProgramStageCanceledComponent';
import ProgramListComponent from '../components/program/ProgramListComponent';

const programStageRoutes: {
  key: string;
  component: () => JSX.Element;
}[] = [
  { key: 'open', component: ProgramStageOpenComponent },
  { key: 'matching', component: ProgramStageMatchingComponent },
  { key: 'scheduled', component: ProgramStageScheduledComponent },
  { key: 'inprogress', component: ProgramStageInProgressComponent },
  { key: 'closed', component: ProgramStageClosedComponent },
  { key: 'canceled', component: ProgramStageCanceledComponent },
];

function Programs() {
  const { path } = useRouteMatch();
  return (
    <div>
      <ProgramsNavbar />
      <h2>This is the Programs Page</h2>
      <Switch>
        {programStageRoutes.map((programStageRoute) => (
          <Route
            exact
            path={`${path}/${programStageRoute.key}`}
            component={programStageRoute.component}
            key={programStageRoute.key}
          />
        ))}
      </Switch>
      <ProgramListComponent />
    </div>
  );
}

export default Programs;
