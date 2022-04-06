// import { useContext } from 'react';
// import GoogleLoginContext from '../store/GoogleLoginContext';
import GoogleLogin from './google_login/GoogleLogin';

function HomeComponent({ location }: { location: any }) {
  return (
    <div>
      <h1>
        Content for
        {`"
    ${location.pathname}
    "`}
        TBD
        <GoogleLogin />
      </h1>
    </div>
  );
}

export default HomeComponent;
