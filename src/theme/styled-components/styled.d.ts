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
    };

    fontSize: {
      large: string;
      medium: string;
      small: string;
      overline: string;
    };

    lineHeight: {
      large: string;
      medium: string;
      small: string;
      overline: string;
    };
  }
}
