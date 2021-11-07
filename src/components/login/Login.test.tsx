import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

afterEach(cleanup);

describe('Login component tests', () => {
  it('Change state test', () => {
    render(<Login />);
    const loginButton = screen.queryByTestId('login-button');
    const loginInput = screen.queryByTestId('login-input');
    expect(loginButton).not.toBe(null);
    expect(loginInput).not.toBe(null);

    userEvent.paste(loginInput as HTMLElement, 'UserName');
    userEvent.click(loginButton as HTMLElement);

    const logoutButton = screen.queryByTestId('logout-button');
    expect(screen.queryByTestId('login-name')).not.toBe(null);
    expect(logoutButton).not.toBe(null);
    expect(screen.queryByTestId('login-button')).toBe(null);
    expect(screen.queryByTestId('login-input')).toBe(null);

    userEvent.click(logoutButton as HTMLElement);

    expect(screen.queryByTestId('login-button')).not.toBe(null);
    expect(screen.queryByTestId('login-input')).not.toBe(null);
  });
});
