import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import NavBar from '../NavBar';

const pages: {
  pageName: string;
  path: string;
}[] = [
  { pageName: 'account', path: '/account' },
  { pageName: 'volunteers', path: '/volunteers' },
  { pageName: 'beneficiaries', path: '/beneficiaries' },
  { pageName: 'programs', path: '/programs' },
  { pageName: 'form', path: '/form' },
];

describe('NavBar Component', () => {
  pages.forEach((page) => {
    test(`Navigates to ${page.pageName} page when ${page.pageName} is clicked`, () => {
      const history = createMemoryHistory();
      render(
        <Router history={history}>
          <NavBar />
        </Router>,
      );

      userEvent.click(screen.getByTestId(`${page.pageName}`));

      expect(history.location.pathname).toEqual(`${page.path}`);
    });
  });
});
