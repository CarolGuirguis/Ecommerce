import React from 'react';
import { render, screen } from '@testing-library/react';
import {Login} from './components/Login';

test('renders learn react link', () => {
  render(<Login />);
  const linkElement = screen.getByText(/Sign in to your account/i);
  expect(linkElement).toBeInTheDocument();
});