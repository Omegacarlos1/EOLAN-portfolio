import { fireEvent, render, screen } from '@testing-library/react';
import { ProfilePortrait } from './ProfilePortrait';

describe('ProfilePortrait', () => {
  it('announces image loading and reveals the supplied portrait when ready', () => {
    render(<ProfilePortrait priority src="/images/portrait.jpg" />);

    const portrait = screen.getByAltText(
      'Egbedayo Olanrewaju, Full-Stack Web Developer',
    );

    expect(screen.getByRole('status')).toHaveTextContent(
      'Loading professional portrait',
    );
    expect(portrait.closest('figure')).toHaveAttribute('aria-busy', 'true');
    expect(portrait).toHaveAttribute('loading', 'eager');
    expect(portrait).toHaveAttribute('fetchpriority', 'high');

    fireEvent.load(portrait);

    expect(screen.queryByRole('status')).not.toBeInTheDocument();
    expect(portrait.closest('figure')).toHaveAttribute('aria-busy', 'false');
  });

  it('falls back to an accessible placeholder when the image fails', () => {
    render(<ProfilePortrait src="/images/missing.jpg" />);

    fireEvent.error(
      screen.getByAltText('Egbedayo Olanrewaju, Full-Stack Web Developer'),
    );

    expect(
      screen.getByRole('img', {
        name: 'Professional portrait placeholder for Egbedayo Olanrewaju',
      }),
    ).toHaveTextContent('Portrait unavailable');
  });
});
