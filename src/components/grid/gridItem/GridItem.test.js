import React from 'react';
import { render } from '@testing-library/react';
import GridItem from './GridItem';

describe('GridItem', () => {
  test('renders GridItem component', () => {
    var result = render(<GridItem />);
    expect(result.container.querySelector('.GridItem')).toBeInTheDocument();
  });
}); 