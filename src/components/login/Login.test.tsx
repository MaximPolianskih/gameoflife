import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login, { LoginProcessEnum } from './Login';

afterEach(cleanup);

describe('Login component tests', () => {
  it('Change state test', () => {
    render(<Login onChange={(row: number, col: number) => { }} onLoginStatusChange={(loginStatus: LoginProcessEnum) => { }} />);
    const loginButton = screen.queryByTestId('login-button');
    const loginInput = screen.queryByTestId('login-input');
    expect(loginButton).toBeTruthy();
    expect(loginInput).toBeTruthy();

    userEvent.paste(loginInput as HTMLElement, 'UserName');
    userEvent.click(loginButton as HTMLElement);

    const logoutButton = screen.queryByTestId('logout-button');
    expect(screen.queryByTestId('login-name')).toBeTruthy();
    expect(logoutButton).toBeTruthy();
    expect(screen.queryByTestId('login-button')).toBe(null);
    expect(screen.queryByTestId('login-input')).toBe(null);

    userEvent.click(logoutButton as HTMLElement);

    expect(screen.queryByTestId('login-button')).toBeTruthy();
    expect(screen.queryByTestId('login-input')).toBeTruthy();
  });
});
