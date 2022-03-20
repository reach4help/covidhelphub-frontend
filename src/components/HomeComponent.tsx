import { useContext } from 'react';
import GoogleLoginContext from '../store/GoogleLoginContext';
import GoogleLogin from './google_login/GoogleLogin';

function HomeComponent({ location }: { location: any }) {
  const { loginState } = useContext(GoogleLoginContext);
  return (
    <h1>
      Content for
      {`"
      ${location.pathname}
      "`}
      TBD
      <GoogleLogin />
      {loginState ? 'Logged In: True' : 'Logged In: False'}
    </h1>
  );
}

export default HomeComponent;
