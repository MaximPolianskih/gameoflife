import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { Options } from './Options';
import { Provider } from 'react-redux';
import reducer, { applyOptions, changeOptions, IOptionState, OptionsLoadingEnum } from './OptionsReducer';
import { SpeedEnum } from './speedRegulator/SpeedRegulator';
import { AnyAction, Store } from 'redux';
import { createTestStore } from '../../store/store';
import '@testing-library/jest-dom'

let store: Store<any>;
beforeEach(() => {
    store = createTestStore();
});
afterEach(cleanup);

describe('Options component tests', () => {
    it('Init component test', async () => {
        render(
            <Provider store={store}>
                <Options/>
            </Provider>);

        expect(screen.queryByTestId('options-loader-label')).toBeTruthy();

        await new Promise((f) => setTimeout(f, 1000));

        expect(screen.queryByTestId('options-input-rows')).toBeTruthy();
        expect(screen.queryByTestId('options-input-cols')).toBeTruthy();
        expect(screen.queryByTestId('options-change-button')).toBeTruthy();
        expect(screen.queryByTestId('options-loader-label')).not.toBeTruthy();
    });

    it('Init component with error', async () => {
        store.dispatch(changeOptions({status: OptionsLoadingEnum.Error} as IOptionState))
        expect(store.getState().option).toEqual({
            rows: 0,
            cols: 0,
            percent: 0,
            speed: SpeedEnum.Fast,
            status: OptionsLoadingEnum.Error,
        });

        render(
            <Provider store={store}>
                <Options/>
            </Provider>);

        expect(screen.getByTestId('options-error-label')).toBeTruthy();
    });

    it('Options use cases', async () => {
        render(
            <Provider store={store}>
                <Options/>
            </Provider>);

        expect(screen.queryByTestId('options-loader-label')).toBeTruthy();

        await new Promise((f) => setTimeout(f, 1000));

        expect(screen.queryByTestId('options-load-complete')).toBeTruthy();
        expect(screen.queryByTestId('speed-regulator-component')).toBeTruthy();

        fireEvent.click(screen.getByTestId('options-change-button'));
        expect(localStorage.getItem('')).not.toBeNull();

        fireEvent.change(screen.getByTestId('options-input-rows'), {target: {value: '5'}});
        expect(store.getState().option.rows).toEqual(5);

        fireEvent.change(screen.getByTestId('options-input-rows'), {target: {value: ''}});
        expect(store.getState().option.rows).toEqual(5);

        fireEvent.change(screen.getByTestId('options-input-cols'), {target: {value: '7'}});
        expect(store.getState().option.cols).toEqual(7);

        fireEvent.change(screen.getByTestId('options-input-cols'), {target: {value: ''}});
        expect(store.getState().option.cols).toEqual(7);

        fireEvent.change(screen.getByTestId('options-input-percent'), {target: {value: '50'}});
        expect(store.getState().option.percent).toEqual(50);

        fireEvent.change(screen.getByTestId('options-input-percent'), {target: {value: ''}});
        expect(store.getState().option.percent).toEqual(50);
    });
});

describe('OptionsReducer tests', () => {
    test('should return the initial state', () => {
        expect(reducer(undefined, {} as AnyAction)).toEqual({
            rows: 0,
            cols: 0,
            percent: 0,
            speed: SpeedEnum.Fast,
            status: OptionsLoadingEnum.Loading,
        } as IOptionState);
    });

    test('should return origin state', () => {
        const previousState = {
            rows: 0,
            cols: 0,
            percent: 0,
            speed: SpeedEnum.Fast,
            status: OptionsLoadingEnum.Loading,
        } as IOptionState;
        const newState = reducer(previousState, applyOptions(''));

        expect(newState).toEqual({
            rows: 0,
            cols: 0,
            percent: 0,
            speed: SpeedEnum.Fast,
            status: OptionsLoadingEnum.Loading,
        } as IOptionState);
    });

    const dataSets = [
        [
            {
                rows: 0,
                cols: 0,
                percent: 0,
                speed: SpeedEnum.Fast,
                status: OptionsLoadingEnum.Loading,
            },
            { rows: 1 } as IOptionState,
            {
                rows: 1,
                cols: 0,
                percent: 0,
                speed: SpeedEnum.Fast,
                status: OptionsLoadingEnum.Loading,
            },
        ],
        [
            {
                rows: 0,
                cols: 0,
                percent: 0,
                speed: SpeedEnum.Fast,
                status: OptionsLoadingEnum.Loading,
            },
            { cols: 5 } as IOptionState,
            {
                rows: 0,
                cols: 5,
                percent: 0,
                speed: SpeedEnum.Fast,
                status: OptionsLoadingEnum.Loading,
            },
        ],
        [
            {
                rows: 0,
                cols: 0,
                percent: 0,
                speed: SpeedEnum.Fast,
                status: OptionsLoadingEnum.Loading,
            },
            { percent: 35 } as IOptionState,
            {
                rows: 0,
                cols: 0,
                percent: 35,
                speed: SpeedEnum.Fast,
                status: OptionsLoadingEnum.Loading,
            },
        ],
        [
            {
                rows: 0,
                cols: 0,
                percent: 0,
                speed: SpeedEnum.Fast,
                status: OptionsLoadingEnum.Loading,
            },
            { speed: SpeedEnum.Slow } as IOptionState,
            {
                rows: 0,
                cols: 0,
                percent: 0,
                speed: SpeedEnum.Slow,
                status: OptionsLoadingEnum.Loading,
            },
        ],
        [
            {
                rows: 0,
                cols: 0,
                percent: 0,
                speed: SpeedEnum.Fast,
                status: OptionsLoadingEnum.Loading,
            },
            { status: OptionsLoadingEnum.Complete } as IOptionState,
            {
                rows: 0,
                cols: 0,
                percent: 0,
                speed: SpeedEnum.Fast,
                status: OptionsLoadingEnum.Complete,
            },
        ],
    ];

    it.each(dataSets)('should return changed state',
        (originState, payload, expectedState) => {
            const newState = reducer(originState, changeOptions(payload));
            expect(newState).toEqual(expectedState);
        });
});


