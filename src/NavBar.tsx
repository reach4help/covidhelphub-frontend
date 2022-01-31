/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Link } from 'react-router-dom';

function getNavBarHTML(
  mainMenuOptions: {
    link: string;
    menuText: string;
    implemented: boolean;
    testid: string;
  }[],
) {
  return mainMenuOptions.map((menuOption) => (
    <Link
      to={menuOption.link}
      key={menuOption.menuText}
      data-testid={menuOption.testid}
      className={`nav-link ${menuOption.implemented ? '' : 'tbd-font'}`}
    >
      {menuOption.menuText}
    </Link>
  ));
}

export default function NavBar() {
  const mainMenuOptions = [
    {
      link: '/account',
      menuText: 'Account',
      implemented: false,
      testid: 'account',
    },
    {
      link: '/volunteers',
      menuText: 'Volunteers',
      implemented: false,
      testid: 'volunteers',
    },
    {
      link: '/beneficiaries',
      menuText: 'Beneficiaries',
      implemented: false,
      testid: 'beneficiaries',
    },
    {
      link: '/programs',
      menuText: 'Programs',
      implemented: true,
      testid: 'programs',
    },
    {
      link: '/form',
      menuText: 'Forms',
      implemented: true,
      testid: 'form',
    },
  ];
  const mainMenuHTML = getNavBarHTML(mainMenuOptions);

  return (
    <>
      <Link to="/" className="nav-link" data-testid="dashboard">
        <span>Dashboard</span>
      </Link>
      {mainMenuHTML}
    </>
  );
}
