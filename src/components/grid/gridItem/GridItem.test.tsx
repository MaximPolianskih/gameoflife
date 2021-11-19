import React from 'react';
import { render } from '@testing-library/react';
import GridItem from './GridItem';

describe('GridItem', () => {
  test('renders GridItem component', () => {
    const result = render(
      <GridItem col={0} row={0} clickHandler={() => {}} />
    );
    expect(result.container.querySelector('.GridItem')).toBeInTheDocument();
  });
}); 