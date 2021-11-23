import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import GameMenu from './GameMenu';
import {store} from "../../store/store";
import {Provider} from "react-redux";


afterEach(cleanup);

describe('Login component tests', () => {
    it('Render test', () => {
        render(
            <Provider store={store}>
                <GameMenu/>
            </Provider>);
        expect(screen.queryByTestId('game-menu-button-start')).toBeTruthy();
        expect(screen.queryByTestId('game-menu-button-pause')).toBeTruthy();
        expect(screen.queryByTestId('game-menu-button-reset')).toBeTruthy();
    });
});
