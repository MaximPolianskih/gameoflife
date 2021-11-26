import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import GridItem from './GridItem';
import { Provider } from 'react-redux';
import reducer, { generateField, setCellActivity } from './../GridReducer';
import { AnyAction } from 'redux';
import { createTestStore } from '../../../store/store';
import { Store } from '@reduxjs/toolkit';

let store: Store<any>;
beforeEach(() => {
    store = createTestStore();
});
afterEach(cleanup);

describe('GridItem', () => {
    test('renders GridItem component', () => {
        reducer(undefined, {} as AnyAction);
        render(
            <Provider store={store}>
                <GridItem col={0} row={0} clickHandler={() => {
                }}/>
            </Provider>,
        );

        expect(screen.queryByTestId('grid-item')).toBeInTheDocument();
        expect(screen.queryByTestId('grid-item')).toHaveStyle('background-color: white');
    });

    test('Render GridItem component active', () => {
        store.dispatch(generateField({ rows: 1, cols: 1, percent: 0, speed: 2 }));
        store.dispatch(setCellActivity({ row: 0, col: 0, isActive: true }));
        const mockClickHandler = jest.fn();

        render(
            <Provider store={store}>
                <GridItem col={0} row={0} clickHandler={mockClickHandler}/>
            </Provider>,
        );

        expect(screen.queryByTestId('grid-item')).toHaveStyle('background-color: rgb(0, 255, 0)');

        fireEvent.click(screen.getByTestId('grid-item'));
        expect(mockClickHandler).toHaveBeenCalled();
    });
});
