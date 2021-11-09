import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import GameMenu from './gameMenu';

afterEach(cleanup);

describe('Login component tests', () => {
    it('Render test', () => {
        render(<GameMenu />);
        expect(screen.queryByTestId('game-menu-button-start')).toBeTruthy();
        expect(screen.queryByTestId('game-menu-button-pause')).toBeTruthy();
        expect(screen.queryByTestId('game-menu-button-reset')).toBeTruthy();
    });
});
