import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import {Options} from './Options';
import {store} from "../../store/store";
import {Provider} from "react-redux";

afterEach(cleanup);

describe('Options component tests', () => {
    it('Change state test', async () => {
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
});
