import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { AppRoutes } from '../app/router';
import { store } from '../app/store';

function renderRoute(path: string) {
  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[path]}>
        <AppRoutes />
      </MemoryRouter>
    </Provider>,
  );
}

describe('main portfolio pages', () => {
  it('shows the approved home headline, role and biography', () => {
    renderRoute('/');

    expect(screen.getByRole('heading', { level: 1, name: 'Building Digital Experience' })).toBeInTheDocument();
    expect(screen.getByText('Full-Stack Web Developer')).toBeInTheDocument();
    expect(screen.getByText(/I am a passionate Full Stack Web Developer/)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /professional portrait placeholder/i })).toBeInTheDocument();
  });

  it('shows the approved biography and a non-clickable CV state', () => {
    renderRoute('/about');

    expect(screen.getByText(/I enjoy turning ideas into practical digital solutions/)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'CV coming later' })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /download/i })).not.toBeInTheDocument();
  });

  it('lists the required skills and distinguishes them from the project stack', () => {
    renderRoute('/skills');

    const frontendCard = screen.getByRole('heading', { name: 'Frontend' }).closest('.card');
    const backendCard = screen.getByRole('heading', { name: 'Backend' }).closest('.card');
    const databaseCard = screen.getByRole('heading', { name: 'Databases' }).closest('.card');

    expect(frontendCard).not.toBeNull();
    expect(backendCard).not.toBeNull();
    expect(databaseCard).not.toBeNull();
    expect(within(frontendCard as HTMLElement).getByText('React')).toBeInTheDocument();
    expect(within(frontendCard as HTMLElement).getByText('JavaScript')).toBeInTheDocument();
    expect(within(frontendCard as HTMLElement).getByText('TypeScript')).toBeInTheDocument();
    expect(within(frontendCard as HTMLElement).getByText('Redux')).toBeInTheDocument();
    expect(within(backendCard as HTMLElement).getByText('Node.js')).toBeInTheDocument();
    expect(within(backendCard as HTMLElement).getByText('Express')).toBeInTheDocument();
    expect(within(databaseCard as HTMLElement).getByText('MongoDB')).toBeInTheDocument();
    expect(within(databaseCard as HTMLElement).getByText('MySQL')).toBeInTheDocument();
    expect(screen.getByText(/MongoDB is a broader skill, not this portfolio’s project database/)).toBeInTheDocument();
  });

  it('lists all six approved services', () => {
    renderRoute('/services');

    for (const service of [
      'Full-stack development',
      'Frontend development',
      'Backend / API development',
      'Database design',
      'E-commerce development',
      'Website maintenance',
    ]) {
      expect(screen.getByRole('heading', { name: service })).toBeInTheDocument();
    }
  });

  it('keeps unverified experience explicitly unpublished', () => {
    renderRoute('/experience');

    expect(screen.getByRole('heading', { name: 'No unverified history' })).toBeInTheDocument();
    expect(screen.getByText(/Nothing here is invented/)).toBeInTheDocument();
  });

  it('publishes the verified direct contact links', () => {
    renderRoute('/contact');

    expect(screen.getByRole('link', { name: 'Egbedayoolanrewaju@gmail.com' })).toHaveAttribute(
      'href',
      'mailto:Egbedayoolanrewaju@gmail.com',
    );
    expect(screen.getByRole('link', { name: /Omegacarlos1/ })).toHaveAttribute(
      'href',
      'https://github.com/Omegacarlos1',
    );
    expect(screen.getByRole('link', { name: /Egbedayo Olanrewaju/ })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/egbedayo-olanrewaju-671730243/',
    );
    expect(screen.getByRole('link', { name: /Omegacarlos1/ })).toHaveAccessibleName(
      'Omegacarlos1 (opens in a new tab)',
    );
  });
});

describe('contact form', () => {
  it('shows validation messages for missing required fields', async () => {
    const user = userEvent.setup();
    renderRoute('/contact');

    await user.click(screen.getByRole('button', { name: 'Check enquiry' }));

    expect(screen.getByText('Enter your name.')).toBeInTheDocument();
    expect(screen.getByText('Enter your email address.')).toBeInTheDocument();
    expect(screen.getByText('Tell me a little about your project.')).toBeInTheDocument();
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
    expect(screen.getByLabelText(/^Name/)).toHaveFocus();
  });

  it('validates formats and reports that a valid enquiry was not sent', async () => {
    const user = userEvent.setup();
    renderRoute('/contact');

    await user.type(screen.getByLabelText(/^Name/), 'Egbedayo Olanrewaju');
    await user.type(screen.getByLabelText(/^Email/), 'not-an-email');
    await user.type(screen.getByLabelText(/^Project details/), 'Too short');
    await user.click(screen.getByRole('button', { name: 'Check enquiry' }));

    expect(screen.getByText('Enter a valid email address.')).toBeInTheDocument();
    expect(screen.getByText(/Add at least 20 characters/)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Project details/)).toHaveAttribute(
      'aria-describedby',
      'contact-message-hint contact-message-error',
    );

    await user.clear(screen.getByLabelText(/^Email/));
    await user.type(screen.getByLabelText(/^Email/), 'client@example.com');
    await user.clear(screen.getByLabelText(/^Project details/));
    await user.type(
      screen.getByLabelText(/^Project details/),
      'I need a responsive website for a new business launch.',
    );
    await user.click(screen.getByRole('button', { name: 'Check enquiry' }));

    expect(screen.getByRole('status')).toHaveTextContent(
      'Sending unavailable until backend is connected. Your message has not been sent.',
    );
    expect(screen.getByLabelText(/^Name/)).toHaveValue('Egbedayo Olanrewaju');
  });
});
