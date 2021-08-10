import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
 
import GridItem from './GridItem';
 
describe('GridItem', () => {
  test('renders GridItem component', () => {
    var result = render(<GridItem />);
    expect(result.container.querySelector('.GridItem')).toBeInTheDocument();
  });
});