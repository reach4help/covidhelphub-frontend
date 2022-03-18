import React from 'react';
// import GoogleLoginContext from '../store/GoogleLoginContext';
// import LoginProvider from './google_login/GoogleLogin';

function HomeComponent({ location }: { location: any }) {
  // const [loginState, setLoginState] = useState(
  //   localStorage.getItem('loginstate') === 'true',
  // );
  // const value = useMemo(() => ({ loginState, setLoginState }), [loginState]);
  return (
    <h1>
      Content for
      {`"
      ${location.pathname}
      "`}
      TBD
      {/* <GoogleLoginContext.Provider value={value}>
      <LoginProvider />
        {loginState ? 'Logged In: True' : 'Logged In: False'}
      </GoogleLoginContext.Provider> */}
    </h1>
  );
}

export default HomeComponent;
