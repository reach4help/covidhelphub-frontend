import React from 'react';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  && {
    background-color: ${(props) => props.theme.color.gray1};
    font-size: inherit;
    padding: 100px;
    border-radius: 10px;
  }
`;

const ButtonExampleEmphasis = () => <StyledButton>Primary</StyledButton>;

export default ButtonExampleEmphasis;
