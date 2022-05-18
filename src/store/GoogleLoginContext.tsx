import {
  createContext, useState, useMemo, useEffect,
} from 'react';
// creating a default value and intitalising GoogleLoginContext.
const defaultvalue: { [key: string]: any } = {
  loginState: localStorage.getItem('loginstate'),
  setLoginState: () => {},
  name: localStorage.getItem('name'),
  setName: () => {},
  email: localStorage.getItem('email'),
  setEmail: () => {},
  url: localStorage.getItem('url'),
  setUrl: () => {},
};
const GoogleLoginContext = createContext(defaultvalue);

function GoogleLoginContextProvider({ children }: any) {
  const [loginState, setLoginState] = useState(
    localStorage.getItem('loginstate'),
  );
  const [name, setName] = useState(localStorage.getItem('name'));
  const [email, setEmail] = useState(localStorage.getItem('email'));
  const [url, setUrl] = useState(localStorage.getItem('url'));

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
