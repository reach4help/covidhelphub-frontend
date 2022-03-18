import {
  createContext, useState, useMemo, useEffect, Children,
} from 'react';
// import GoogleLogin from '../components/google_login/GoogleLogin';
const defaultvalue: { [key: string]: any } = {
  loginState: localStorage.getItem('loginstate') === 'true',
  setLoginState: () => {},
};
const GoogleLoginContext = createContext(defaultvalue);

function GoogleLoginContextProvider() {
  const [loginState, setLoginState] = useState(
    localStorage.getItem('loginstate') === 'true',
  );
  const value = useMemo(() => ({ loginState, setLoginState }), [loginState]);
  useEffect(() => {
    localStorage.setItem('loginstate', loginState);
  }, [loginState]);
  // const { children } = this.props.children;
  return (
    <GoogleLoginContext.Provider value={value}>
      {Children}
    </GoogleLoginContext.Provider>
  );
}
export { GoogleLoginContextProvider };
export default GoogleLoginContext;
