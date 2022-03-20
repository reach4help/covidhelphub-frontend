import {
  createContext, useState, useMemo, useEffect,
} from 'react';
// creating a default value and intitalising GoogleLoginContext.
const defaultvalue: { [key: string]: any } = {
  loginState: localStorage.getItem('loginstate') === 'true',
  setLoginState: () => {},
};
const GoogleLoginContext = createContext(defaultvalue);

function GoogleLoginContextProvider({ children }: any) {
  const [loginState, setLoginState] = useState(
    localStorage.getItem('loginstate') === 'true',
  );

  const value = useMemo(() => ({ loginState, setLoginState }), [loginState]);

  useEffect(() => {
    localStorage.setItem('loginstate', String(loginState));
  }, [loginState]);

  return (
    <GoogleLoginContext.Provider value={value}>
      {children}
    </GoogleLoginContext.Provider>
  );
}
export { GoogleLoginContextProvider };
export default GoogleLoginContext;
