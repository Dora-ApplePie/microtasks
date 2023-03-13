import React from 'react';
import { render, screen } from '@testing-library/react';
import MainFirst from './task 1/MainFirst';

test('renders learn react link', () => {
  render(<MainFirst />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
