import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import Grid from './Grid';
import { createTestStore } from '../../store/store';
import { Provider } from 'react-redux';
import reducer, { generateField, setCellActivity } from '../grid/GridReducer';
import { AnyAction, Store } from 'redux';
import { IGridState } from './GridReducer';
import { SpeedEnum } from '../options/speedRegulator/SpeedRegulator';
import { changeOptions, IOptionState, OptionsLoadingEnum } from '../options/OptionsReducer';
import { GameOfLife } from '../../logics/BaseLogic';

let store: Store<any>;
beforeEach(() => {
    store = createTestStore();
});
afterEach(cleanup);

describe('Grid', () => {
    test('renders Grid component', () => {
        store.dispatch(changeOptions({ rows: 5, cols: 7 } as IOptionState));
        expect(store.getState().option).toEqual({
            rows: 5,
            cols: 7,
            percent: 0,
            speed: SpeedEnum.Fast,
            status: OptionsLoadingEnum.Loading,
        });

        render(
            <Provider store={store}>
                <Grid/>
            </Provider>);

        expect(screen.queryByTestId('grid')).toBeInTheDocument();
        expect(screen.getAllByTestId('grid-item').length).toEqual(35);

        expect(screen.getAllByTestId('grid-item')[0]).toHaveStyle('grid-row-start: 1');
        expect(screen.getAllByTestId('grid-item')[0]).toHaveStyle('grid-column-start: 1');
    });
});

describe('GridReducer tests', () => {
    test('should return the initial state', () => {
        expect(reducer(undefined, {} as AnyAction)).toEqual({
            field: [[]],
        } as IGridState);
    });

    test('should return new state', () => {
        let newState = reducer({ field: [[]] }, generateField({ rows: 5, cols: 6, percent: 50 } as IOptionState));

        expect(newState.field.length).toEqual(5);
        expect(newState.field[0].length).toEqual(6);
        expect(GameOfLife.GetAliveCount(newState.field)).toEqual(15);

        newState = reducer(newState, setCellActivity({ row: 3, col: 3, isActive: false }));
        expect(newState.field[3][3]).toEqual(0);

        newState = reducer(newState, setCellActivity({ row: 3, col: 3, isActive: true }));
        expect(newState.field[3][3]).toEqual(1);
    });
});
