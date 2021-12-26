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

export default function NavBar() {
  const mainMenuOptions = [
    { link: '/account', menuText: 'Account', implemented: false },
    { link: '/volunteers', menuText: 'Volunteers', implemented: false },
    {
      link: '/beneficiaries',
      menuText: 'Beneficiaries',
      implemented: false,
    },
    { link: '/program/list', menuText: 'Programs', implemented: true },
    { link: '/form', menuText: 'Forms', implemented: true },
  ];
  const mainMenuHTML = getNavBarHTML(mainMenuOptions);

  return (
    <>
      <Link to="/" className="nav-link">
        <span>Dashboard</span>
      </Link>
      {mainMenuHTML}
    </>
  );
}
