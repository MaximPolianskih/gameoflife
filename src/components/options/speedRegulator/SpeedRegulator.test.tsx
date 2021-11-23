import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import SpeedRegulator from './SpeedRegulator';
import {store} from "../../../store/store";
import {Provider} from "react-redux";

afterEach(cleanup);

describe('Login component tests', () => {
    it('Render test', () => {
        render(
            <Provider store={store}>
                <SpeedRegulator clickHandler={(speed: number) => {}}/>
            </Provider>);
        expect(screen.queryByTestId('speed-regulator-button-low')).toBeTruthy();
        expect(
            screen.queryByTestId('speed-regulator-button-medium'),
        ).toBeTruthy();
        expect(
            screen.queryByTestId('speed-regulator-button-hight'),
        ).toBeTruthy();
    });
});
