/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function getNavBarHTML(
  mainMenuOptions: { link: string; menuText: string; implemented: boolean }[],
) {
  return mainMenuOptions.map((menuOption) => (
    <Link
      to={menuOption.link}
      key={menuOption.menuText}
      className={`nav-link ${menuOption.implemented ? '' : 'tbd-font'}`}
    >
      {menuOption.menuText}
    </Link>
  ));
}

export default function NavBarFunc() {
  const [showAdminMenu, setShowAdmin] = useState(false);
  const adminMenuOptions = [
    { link: '/program/list', menuText: 'Programs', implemented: true },
    { link: '/stage/list', menuText: 'Stages', implemented: true },
    { link: '/email/list', menuText: 'Email Templates', implemented: false },
    { link: '/text/list', menuText: 'Text Templates', implemented: false },
    { link: '/question/list', menuText: 'Questions', implemented: false },
  ];
  const mainMenuOptions = [
    { link: '/request/list', menuText: 'Requests', implemented: true },
    { link: '/volunteers/form', menuText: 'Volunteers', implemented: false },
    {
      link: '/beneficiaries/form',
      menuText: 'Beneficiaries',
      implemented: false,
    },
  ];
  const adminMenuHTML = getNavBarHTML(adminMenuOptions);
  const mainnMenuHTML = getNavBarHTML(mainMenuOptions);

  function NavBar() {
    return <div />;
  }
  let NavBar2;
  if (showAdminMenu) {
    NavBar2 = () => (
      <>
        <Link to="/" className="nav-link">
          <span onClick={() => setShowAdmin(false)}>Home</span>
        </Link>
        {adminMenuHTML}
      </>
    );
  } else {
    NavBar2 = () => (
      <div>
        <Link to="/admin" className="nav-link">
          <span onClick={() => setShowAdmin(true)}>Admin</span>
        </Link>
        {mainnMenuHTML}
      </div>
    );
  }
  return NavBar2;
}
