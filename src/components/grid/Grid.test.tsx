import React from 'react';
import { render, screen } from '@testing-library/react';
import Grid from './Grid';

describe('Grid', () => {
  test('renders Grid component', () => {
    var result = render(<Grid cols={5} rows = { 5} />);
    expect(result.container.querySelector('.Grid')).toBeInTheDocument();
  });
  test('count GridItem elements',  () => {
    render(<Grid cols={5} rows={5} />);
    const items = screen.findAllByRole('GridItem');
    expect(items).toHaveLength(25);
  });
});