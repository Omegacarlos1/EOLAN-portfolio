import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Button, ButtonLink } from './Button';
import { Card } from './Card';
import { Container } from './Container';
import { SectionHeading } from './SectionHeading';

describe('shared UI components', () => {
  it('renders a typed section heading at the requested level', () => {
    render(
      <SectionHeading
        description="Supporting copy"
        eyebrow="Selected work"
        headingLevel={3}
        title="Recent projects"
      />,
    );

    expect(
      screen.getByRole('heading', { level: 3, name: 'Recent projects' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Supporting copy')).toBeInTheDocument();
  });

  it('applies reusable container and card variants', () => {
    render(
      <Container data-testid="container" size="narrow">
        <Card data-testid="card" tone="accent">
          Card content
        </Card>
      </Container>,
    );

    expect(screen.getByTestId('container')).toHaveClass('container--narrow');
    expect(screen.getByTestId('card')).toHaveClass('card--accent');
  });

  it('supports button actions and internal button links', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();

    render(
      <MemoryRouter>
        <Button onClick={handleClick}>Send enquiry</Button>
        <ButtonLink to="/projects" variant="secondary">
          View projects
        </ButtonLink>
      </MemoryRouter>,
    );

    await user.click(screen.getByRole('button', { name: 'Send enquiry' }));

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('link', { name: 'View projects' })).toHaveAttribute(
      'href',
      '/projects',
    );
  });
});
