import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import {Options} from './Options';

afterEach(cleanup);

describe('Options component tests', () => {
    it('Change state test', async () => {
        render(<Options userName={"TestUserName"} onChange={(row: number, col: number) => {
        }}/>);
        expect(screen.queryByTestId('options-loader-lebel')).toBeTruthy();

        await new Promise((f) => setTimeout(f, 3000));

        expect(screen.queryByTestId('options-input-rows')).toBeTruthy();
        expect(screen.queryByTestId('options-input-cols')).toBeTruthy();
        expect(screen.queryByTestId('options-change-button')).toBeTruthy();
        expect(screen.queryByTestId('options-loader-lebel')).not.toBeTruthy();
    });
});
