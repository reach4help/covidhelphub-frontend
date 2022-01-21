import { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ProgramsNavbar from './ProgramsNavbar';
import ProgramStageOpenComponent from './program-stage/ProgramStageOpenComponent';
import ProgramStageMatchingComponent from './program-stage/ProgramStageMatchingComponent';
import ProgramStageScheduledComponent from './program-stage/ProgramStageScheduledComponent';
import ProgramStageInProgressComponent from './program-stage/ProgramStageInProgressComponent';
import ProgramStageClosedComponent from './program-stage/ProgramStageClosedComponent';
import ProgramStageCanceledComponent from './program-stage/ProgramStageCanceledComponent';
import ProgramListComponent from './ProgramListComponent';
import Modal from '../utilities/Modal';

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

// Placeholder Component for Pop-up content (To be removed later)
function TestComponent() {
  return (
    <div style={{ width: '600px', height: '100px' }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident earum
      veniam voluptatibus. Porro perferendis laboriosam dignissimos repellendus
      tenetur. Dolores aperiam sint quis ducimus dolorem. Illo sint labore
      doloremque esse sed! Fuga, sunt. Modi, deserunt earum!
    </div>
  );
}

function Programs() {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const { path } = useRouteMatch();
  return (
    <div>
      <ProgramsNavbar />
      <h2>This is the Programs Page</h2>
      {/* Test Button for Popup */}
      <button type="button" onClick={() => setShowPopup(true)}>
        Click for Pop-up
      </button>
      {showPopup && (
        <Modal
          title="Assign a new volunteer"
          onClose={() => setShowPopup(false)}
        >
          <TestComponent />
        </Modal>
      )}
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
