/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSpan = styled.span`
  &:hover {
    border-bottom: solid 1px rgb(8, 17, 8);
  }
`;
function getNavBarHTML(
  mainMenuOptions: {
    link: string;
    menuText: string;
    implemented: boolean;
    testid: string;
    hasDropdown: boolean;
  }[],
) {
  return mainMenuOptions.map((menuOption) => (
    <Link
      to={menuOption.link}
      key={menuOption.menuText}
      data-testid={menuOption.testid}
      className={`nav-link ${menuOption.implemented ? '' : 'tbd-font'}`}
    >
      {!menuOption.hasDropdown && (
        <StyledSpan>{menuOption.menuText}</StyledSpan>
      )}
      {menuOption.hasDropdown && (
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <StyledSpan>{menuOption.menuText}</StyledSpan>
            </Accordion.Header>
            <Accordion.Body>
              <StyledSpan>
                <Link to="/programs/vaccines">Vaccines</Link>
              </StyledSpan>
            </Accordion.Body>
            <Accordion.Body>
              <StyledSpan>
                <Link to="/programs/groceries">Groceries</Link>
              </StyledSpan>
            </Accordion.Body>
            <Accordion.Body>
              <StyledSpan>
                <Link to="/programs/face">Face2Face</Link>
              </StyledSpan>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}
    </Link>
  ));
}

export default function NavBar() {
  const mainMenuOptions = [
    {
      link: '/',
      menuText: 'Dashboard',
      implemented: true,
      testid: 'dashboard',
      hasDropdown: false,
    },
    {
      link: '/account',
      menuText: 'Account',
      implemented: false,
      testid: 'account',
      hasDropdown: false,
    },
    {
      link: '/volunteers',
      menuText: 'Volunteers',
      implemented: false,
      testid: 'volunteers',
      hasDropdown: false,
    },
    {
      link: '/beneficiaries',
      menuText: 'Beneficiaries',
      implemented: false,
      testid: 'beneficiaries',
      hasDropdown: false,
    },
    {
      link: '/programs',
      menuText: 'Programs',
      implemented: true,
      testid: 'programs',
      hasDropdown: true,
    },
    {
      link: '/form',
      menuText: 'Forms',
      implemented: true,
      testid: 'form',
      hasDropdown: false,
    },
  ];
  const MainMenuHTML = getNavBarHTML(mainMenuOptions);

  return <div>{MainMenuHTML}</div>;
}
