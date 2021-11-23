import React from 'react';
import {render, screen} from '@testing-library/react';
import Grid from './Grid';
import {store} from "../../store/store";
import {Provider} from "react-redux";

describe('Grid', () => {
    test('renders Grid component', () => {
        var result = render(
            <Provider store={store}>
                <Grid/>
            </Provider>);
        expect(result.container.querySelector('.Grid')).toBeInTheDocument();
    });
});
