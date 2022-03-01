import { createContext } from 'react';

const defaultvalue: { [key: string]: any } = {
  loginState: localStorage.getItem('loginstate') === 'true',
  setLoginState: () => {},
};
const LoginContext = createContext(defaultvalue);
export default LoginContext;
