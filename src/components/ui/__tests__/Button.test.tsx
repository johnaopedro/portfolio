import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '../Button';

describe('Button Component', () => {
  it('renders children correctly', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('applies the correct variant classes', () => {
    const { container } = render(<Button variant="blue">Blue Button</Button>);
    expect(container.firstChild).toHaveClass('bg-spider-blue');
  });

  it('renders as an anchor tag when href is provided', () => {
    render(<Button href="https://example.com">Link Button</Button>);
    const linkElement = screen.getByRole('link', { name: /link button/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://example.com');
  });
});
