import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import SpeedRegulator from './SpeedRegulator';

afterEach(cleanup);

describe('Login component tests', () => {
    it('Render test', () => {
        render(<SpeedRegulator clickHandler={(speed: number) => {
        }}/>);
        expect(screen.queryByTestId('speed-regulator-button-low')).toBeTruthy();
        expect(
            screen.queryByTestId('speed-regulator-button-medium'),
        ).toBeTruthy();
        expect(
            screen.queryByTestId('speed-regulator-button-hight'),
        ).toBeTruthy();
    });
});
