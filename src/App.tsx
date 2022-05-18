import React, { useContext } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import HomeComponent from './components/HomeComponent';
import RequestListComponent from './components/request/RequestListComponent';
import StageListComponent from './components/stage/StageListComponent';
import './globals.css';
import NavBar from './NavBar';
import VolunteerFormComponent from './components/volunteer/VolunteerFormComponent';
import BeneficiaryFormComponent from './components/beneficiary/BeneficiaryFormComponent';
import FormSubmitComponent from './components/formik/FormSuccess';
import FormComponent from './components/form/FormComponent';
import Programs from './components/program/Programs';
// import ProgramRequestSelection from './components/request/RequestProgramSelection';
import Beneficiaries from './components/beneficiary/Beneficiaries';
import Volunteers from './components/volunteer/Volunteers';
import UserProfileDisplayComponent from './components/userProfileDisplay/UserProfileDisplayComponent';
import GoogleLoginContext from './store/GoogleLoginContext';

function App() {
  // console.log(NavBar)
  // TODO: rethink lines for request/list with multiple parameters
  const { loginState } = useContext(GoogleLoginContext);

  return (
    <div className="d-flex flex-row">
      <div className="sidebar-nav">
        <p className="font-weight-bold">Reach4Help</p>
        <NavBar />
      </div>
      <div className="d-flex flex-column w-100 p-3">
        {loginState ? <UserProfileDisplayComponent /> : <div />}
        {/* <br />
        <br /> */}
        <div className="container mt - 3">
          <Switch>
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
            {/* <Route exact path="/request/create" component={RequestCreateComponent} /> */}
            <Route exact path="/programs">
              <Redirect to="/programs/open" />
            </Route>
            <Route path="/programs" component={Programs} />
            <Route exact path="/stage/list" component={StageListComponent} />
            <Route
              exact
              path="/form/beneficiaries"
              component={BeneficiaryFormComponent}
            />
            <Route
              exact
              path="/form/beneficiaries/submitted"
              component={FormSubmitComponent}
            />
            <Route
              exact
              path="/form/volunteers"
              component={VolunteerFormComponent}
            />
            <Route
              exact
              path="/form/volunteers/submitted"
              component={FormSubmitComponent}
            />
            <Route exact path="/form" component={FormComponent} />
            <Route exact path="/volunteers" component={Volunteers} />
            <Route exact path="/beneficiaries" component={Beneficiaries} />
            <Route component={HomeComponent} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
