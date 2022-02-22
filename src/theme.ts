import { DefaultTheme } from 'styled-components';

const typography = {
  fontSize: {
    lg: '20px',
    md: '16px',
    sm: '12px',
    ov: '10px',
  },
  lineHeight: {
    lg: '28px',
    md: '24px',
    sm: '20px',
    ov: '16px',
  },
  fontWeight: {
    bold: 700,
  },
};

const color = {
  gray1: '#333333',
  gray2: '#4F4F4F',
  gray3: '#828282',
  gray4: '#BDBDBD',
  gray5: '#E0E0E0',
  gray6: '#F2F2F2',
  white: '#fff',
  black: '#000',
};

const theme: DefaultTheme = {
  color,
  typography,
};

export default theme;
