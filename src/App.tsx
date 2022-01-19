/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import ProgramListComponent from './components/program/ProgramListComponent';
import RequestListComponent from './components/request/RequestListComponent';
import StageListComponent from './components/stage/StageListComponent';
import NavBarFunc from './NavBarFunc';
import VolunteerFormComponent from './components/volunteer/VolunteerFormComponent';
import BeneficiariesFormComponent from './components/beneficiaries/BeneficiariesFormComponent';
import FormSubmitted from './components/formik/FormSuccess';
// import ProgramRequestSelection from './components/request/RequestProgramSelection';

function App() {
  const NavBar = NavBarFunc();
  // console.log(NavBar)
  // TODO: rethink lines for request/list with multiple parameters
  return (
    <div>
      <nav className="navbar">
        <NavBar />
      </nav>

      <div className="container mt - 3">
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route
            path="/request/list/:programCode/:stageCode"
            component={RequestListComponent}
          />
          <Route
            path="/request/list/:programCode"
            component={RequestListComponent}
          />
          {/* <Route exact path="/request/list" component={ProgramRequestSelection} /> */}
          {/* <Route exact path="/request/list" component={RequestCreateComponent} /> */}
          <Route
            exact
            path="/request/list"
            component={BeneficiariesFormComponent}
          />
          {/* <Route exact path="/request/create" component={RequestCreateComponent} /> */}
          <Route exact path="/program/list" component={ProgramListComponent} />
          <Route exact path="/stage/list" component={StageListComponent} />
          {/* <Route exact path="/beneficiaries/list" component={BeneficiariesComponent} /> */}
          <Route
            exact
            path="/volunteer/list"
            component={VolunteerFormComponent}
          />
          <Route exact path="/submitted">
            {' '}
            <FormSubmitted />{' '}
          </Route>
          <Route component={HomeComponent} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
