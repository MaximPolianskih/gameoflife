import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import GameMenu from './GameMenu';
import { createTestStore } from '../../store/store';
import { Provider } from 'react-redux';
import { AnyAction, Store } from 'redux';
import reducer, { IGameMenuState, startGame, stopGame } from './GameMenuReducer';


let store: Store<any>;
beforeEach(() => {
    store = createTestStore();
});
afterEach(cleanup);

describe('GameMenu component tests', () => {
    it('Render test', () => {
        render(
            <Provider store={store}>
                <GameMenu/>
            </Provider>);

        const startButton = screen.queryByTestId('game-menu-button-start');
        expect(startButton).toBeTruthy();
        expect(startButton).toHaveClass('GameMenuButton');

        const pauseButton = screen.queryByTestId('game-menu-button-pause');
        expect(pauseButton).toBeTruthy();
        expect(pauseButton).toHaveClass('GameMenuButton');

        const resetButton = screen.queryByTestId('game-menu-button-reset');
        expect(resetButton).toBeTruthy();
        expect(resetButton).toHaveClass('GameMenuButton');
    });

    it('Use case test', () => {
        reducer(undefined, {} as AnyAction);
        render(
            <Provider store={store}>
                <GameMenu/>
            </Provider>);

        fireEvent.click(screen.getByTestId('game-menu-button-start'));
        expect(store.getState().gameMenu.isGameRunning).toEqual(true);

        fireEvent.click(screen.getByTestId('game-menu-button-pause'));
        expect(store.getState().gameMenu.isGameRunning).toEqual(false);

        fireEvent.click(screen.getByTestId('game-menu-button-reset'));
        expect(store.getState().gameMenu.isGameRunning).toEqual(false);
        expect(store.getState().grid.field).toBeDefined();
        expect(store.getState().grid.field).not.toBeNull();
    });
});

describe('GameMenuReducer tests', () => {
    test('should return the initial state', () => {
        expect(reducer(undefined, {} as AnyAction)).toEqual({
            isGameRunning: false,
        } as IGameMenuState);
    });
    test('startGame action test', () => {
        expect(reducer({
            isGameRunning: false,
        } as IGameMenuState, startGame())).toEqual({
            isGameRunning: true,
        } as IGameMenuState);
    });
    test('stopGame action test', () => {
        expect(reducer({
            isGameRunning: true,
        } as IGameMenuState, stopGame())).toEqual({
            isGameRunning: false,
        } as IGameMenuState);
    });
});
