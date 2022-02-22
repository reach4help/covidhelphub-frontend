import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      gray5: string;
      gray6: string;
      white: string;
      black: string;
    };
    typography: {
      fontSize: {
        lg: string;
        md: string;
        sm: string;
        ov: string;
      };
      lineHeight: {
        lg: string;
        md: string;
        sm: string;
        ov: string;
      };
      fontWeight: {
        bold: number;
      };
    };
  }
}
