import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { AppRoutes } from '../../app/router';
import { store } from '../../app/store';
import { isValidExternalUrl } from './projectLinks';

function renderRoute(path: string) {
  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[path]}>
        <AppRoutes />
      </MemoryRouter>
    </Provider>,
  );
}

describe('project gallery', () => {
  it('renders all three project entries with truthful TBD statuses', () => {
    renderRoute('/projects');

    expect(screen.getByRole('heading', { name: 'Ahoden Elite Clean' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Playrush Gaming Platform' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Figma BYC Design' })).toBeInTheDocument();
    expect(screen.getAllByText('Status: TBD')).toHaveLength(3);
    expect(screen.getByText('Showing 3 projects.')).toBeInTheDocument();
  });

  it('filters cards by their disclosed category', async () => {
    const user = userEvent.setup();
    renderRoute('/projects');

    await user.click(screen.getByRole('button', { name: 'Design' }));

    expect(screen.getByRole('button', { name: 'Design' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('heading', { name: 'Figma BYC Design' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Ahoden Elite Clean' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Playrush Gaming Platform' })).not.toBeInTheDocument();
    expect(screen.getByText('Showing 1 project in Design.')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'All' }));
    expect(screen.getByText('Showing 3 projects.')).toBeInTheDocument();
  });
});

describe('project case studies', () => {
  it.each([
    ['ahoden-elite-clean', 'Ahoden Elite Clean'],
    ['playrush-gaming-platform', 'Playrush Gaming Platform'],
    ['figma-byc-design', 'Figma BYC Design'],
  ])('renders the typed route for %s', (slug, title) => {
    renderRoute(`/projects/${slug}`);

    expect(screen.getByRole('heading', { level: 1, name: title })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Overview' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Role' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Problem' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Solution' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Stack' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Challenges' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Screenshots' })).toBeInTheDocument();
  });

  it('shows explicit missing-data states without dead project links', () => {
    renderRoute('/projects/ahoden-elite-clean');

    expect(screen.getByText('Verified information is not yet available: Project overview.')).toBeInTheDocument();
    expect(screen.getByText('Verified information is not yet available: Role and responsibilities.')).toBeInTheDocument();
    expect(screen.getByText('Verified information is not yet available: Technology stack.')).toBeInTheDocument();
    expect(screen.getByText('No verified project images have been supplied.')).toBeInTheDocument();
    expect(screen.getByText('Verified information is not yet available: GitHub repository URL.')).toBeInTheDocument();
    expect(screen.getByText('Verified information is not yet available: Live demo URL.')).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'View GitHub repository' })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'View live demo' })).not.toBeInTheDocument();
  });
});

describe('project URL validation', () => {
  it('allows HTTP(S) links and rejects missing or unsafe values', () => {
    expect(isValidExternalUrl('https://github.com/example/project')).toBe(true);
    expect(isValidExternalUrl('http://localhost:3000/demo')).toBe(true);
    expect(isValidExternalUrl('javascript:alert(1)')).toBe(false);
    expect(isValidExternalUrl('ftp://example.com/file')).toBe(false);
    expect(isValidExternalUrl('not-a-url')).toBe(false);
    expect(isValidExternalUrl(null)).toBe(false);
  });
});
