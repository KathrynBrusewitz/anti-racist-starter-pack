import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders page title', () => {
  const { getByText } = render(<App />);
  const pageTitle = getByText(/anti-racist starter pack/i);
  expect(pageTitle).toBeInTheDocument();
});
