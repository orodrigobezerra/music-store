// src/App.test.tsx

import { render, screen } from '@testing-library/react';

import App from '../App';

it('should show "Vite + React" text', () => {
  render(<App />);
  expect(screen.getByText(/store/i)).toBeInTheDocument();
})