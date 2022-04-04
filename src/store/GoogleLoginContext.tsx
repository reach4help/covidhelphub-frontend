import {
  createContext, useState, useMemo, useEffect,
} from 'react';
// creating a default value and intitalising GoogleLoginContext.
const defaultvalue: { [key: string]: any } = {
  loginState: localStorage.getItem('loginstate') === 'true',
  setLoginState: () => {},
  name: localStorage.getItem('name') === 'true',
  setName: () => {},
  email: localStorage.getItem('email') === 'true',
  setEmail: () => {},
  url: localStorage.getItem('url') === 'true',
  setUrl: () => {},
};
const GoogleLoginContext = createContext(defaultvalue);

function GoogleLoginContextProvider({ children }: any) {
  const [loginState, setLoginState] = useState(
    localStorage.getItem('loginstate') === 'true',
  );
  const [name, setName] = useState(localStorage.getItem('name') === 'true');
  const [email, setEmail] = useState(localStorage.getItem('email') === 'true');
  const [url, setUrl] = useState(localStorage.getItem('url') === 'true');

  const value = useMemo(
    () => ({
      loginState,
      setLoginState,
      name,
      setName,
      email,
      setEmail,
      url,
      setUrl,
    }),
    [loginState, name, email, url],
  );

  useEffect(() => {
    localStorage.setItem('loginstate', String(loginState));
    localStorage.setItem('name', String(name));
    localStorage.setItem('email', String(email));
    localStorage.setItem('url', String(url));
  }, [loginState, name, email, url]);

  return (
    <GoogleLoginContext.Provider value={value}>
      {children}
    </GoogleLoginContext.Provider>
  );
}
export { GoogleLoginContextProvider };
export default GoogleLoginContext;
