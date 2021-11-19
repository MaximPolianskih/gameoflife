import React from 'react';
import {render, screen} from '@testing-library/react';
import Grid from './Grid';

describe('Grid', () => {
    test('renders Grid component', () => {
        var result = render(<Grid/>);
        expect(result.container.querySelector('.Grid')).toBeInTheDocument();
    });
    test('count GridItem elements', async () => {
        render(<Grid/>);
        const items = await screen.findAllByRole('GridItem');
        expect(items).toHaveLength(25);
    });
});
