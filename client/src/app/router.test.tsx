import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from './store';
import { AppRoutes } from './router';

function renderRoute(path: string) {
  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[path]}>
        <AppRoutes />
      </MemoryRouter>
    </Provider>,
  );
}

describe('application routes', () => {
  it.each([
    ['/about', 'About'],
    ['/skills', 'Skills'],
    ['/services', 'Services'],
    ['/experience', 'Experience'],
    ['/projects', 'Projects'],
    ['/contact', 'Contact'],
  ])('renders %s with the correct heading', (path, heading) => {
    renderRoute(path);

    expect(screen.getByRole('heading', { level: 1, name: heading })).toBeInTheDocument();
  });

  it('renders the home page and common layout landmarks', () => {
    renderRoute('/');

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Building Digital Experience',
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Primary navigation' })).toBeInTheDocument();
    expect(screen.getAllByAltText('EOLAN DiGITAL logo')).toHaveLength(2);
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('opens and closes the mobile navigation disclosure', async () => {
    const user = userEvent.setup();
    renderRoute('/');
    const menuButton = screen.getByRole('button', { name: 'Open navigation' });

    await user.click(menuButton);

    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    expect(menuButton).toHaveAccessibleName('Close navigation');

    await user.keyboard('{Escape}');

    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    expect(menuButton).toHaveFocus();
  });

  it('marks the current route in the primary navigation', () => {
    renderRoute('/about');

    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute(
      'aria-current',
      'page',
    );
    expect(screen.getByRole('link', { name: 'Home' })).not.toHaveAttribute(
      'aria-current',
    );
  });

  it('renders the project detail placeholder for a slug', () => {
    renderRoute('/projects/example-project');

    expect(
      screen.getByRole('heading', { level: 1, name: 'Project Case Study' }),
    ).toBeInTheDocument();
    expect(screen.getByText(/example-project/)).toBeInTheDocument();
  });

  it('renders the usable 404 route', () => {
    renderRoute('/missing-page');

    expect(
      screen.getByRole('heading', { level: 1, name: 'Page Not Found' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Return home' })).toHaveAttribute(
      'href',
      '/',
    );
  });

  it('navigates with the primary navigation and updates the page title', async () => {
    const user = userEvent.setup();
    renderRoute('/');

    await user.click(screen.getByRole('button', { name: 'Open navigation' }));
    await user.click(screen.getByRole('link', { name: 'About' }));

    expect(
      screen.getByRole('heading', { level: 1, name: 'About' }),
    ).toBeInTheDocument();
    await waitFor(() => {
      expect(document.title).toBe('About | EOLAN DiGITAL');
    });
    expect(
      screen.getByRole('button', { name: 'Open navigation' }),
    ).toHaveAttribute('aria-expanded', 'false');
  });
});
