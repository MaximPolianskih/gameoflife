import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import SpeedRegulator, { GetSpeedName, SpeedEnum } from './SpeedRegulator';
import { createTestStore } from '../../../store/store';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { changeOptions, IOptionState } from '../OptionsReducer';

let store: Store<any>;
beforeEach(() => {
    store = createTestStore();
});
afterEach(cleanup);

describe('SpeedRegulator component tests', () => {
    it('Render test', () => {
        render(
            <Provider store={store}>
                <SpeedRegulator clickHandler={(speed: number) => {
                    store.dispatch(changeOptions({ speed: speed } as IOptionState))
                }}/>
            </Provider>);

        expect(screen.queryByTestId('speed-regulator-label')).toBeTruthy();
        expect(screen.queryByTestId('speed-regulator-button-low')).toBeTruthy();
        expect(screen.queryByTestId('speed-regulator-button-medium')).toBeTruthy();
        expect(screen.queryByTestId('speed-regulator-button-high')).toBeTruthy();

        fireEvent.click(screen.getByTestId('speed-regulator-button-low'));
        expect(store.getState().option.speed).toEqual(SpeedEnum.Slow);

        fireEvent.click(screen.getByTestId('speed-regulator-button-medium'));
        expect(store.getState().option.speed).toEqual(SpeedEnum.Medium);

        fireEvent.click(screen.getByTestId('speed-regulator-button-high'));
        expect(store.getState().option.speed).toEqual(SpeedEnum.Fast);
    });

    it('Test GetSpeedName function', () => {
        expect(GetSpeedName(SpeedEnum.Slow)).toEqual("Медленная");
        expect(GetSpeedName(SpeedEnum.Medium)).toEqual("Средняя");
        expect(GetSpeedName(SpeedEnum.Fast)).toEqual("Быстрая");
    })
});
