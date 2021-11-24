import React from 'react';
import { render } from '@testing-library/react';
import GridItem from './GridItem';
import { Provider } from 'react-redux';
import reducer, { setCellActivity } from './../GridReducer';
import { AnyAction } from 'redux';
import { store } from '../../../store/store';

describe('GridItem', () => {
    test('renders GridItem component', () => {
        reducer(undefined, {} as AnyAction);
        const result = render(
            <Provider store={store}>
                <GridItem col={0} row={0} clickHandler={() => {
                }}/>
            </Provider>,
        );

        expect(result.container.querySelector('.GridItem')).toBeInTheDocument();
        expect(result.container.querySelector('.GridItem')).toHaveStyle('background-color: white');
    });

    // test('Render GridItem component active', () => {
    //     const newState = reducer({ field: [[0]] }, setCellActivity({ row: 0, col: 0, isActive: true }));
    //
    //     expect(newState).toEqual({ field: [[1]] });
    //
    //     const result = render(
    //         <Provider store={store}>
    //             <GridItem col={0} row={0} clickHandler={() => {
    //             }}/>
    //         </Provider>,
    //     );
    //
    //     expect(result.container.querySelector('.GridItem')).toHaveStyle('background-color: green');
    // });
});

// describe('GridItem state tests', () => {
//
// });
