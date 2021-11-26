import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Login } from './Login';
import { createTestStore } from '../../store/store';
import { Provider } from 'react-redux';
import { AnyAction, Store } from 'redux';
import reducer, { changeUserName, ILoginState, login, LoginProcessEnum, logout } from './LoginReducer';

let store: Store<any>;
beforeEach(() => {
    store = createTestStore();
});
afterEach(cleanup);

describe('Login component tests', () => {
    it('Change state test', () => {
        render(
            <Provider store={store}>
                <Login/>
            </Provider>);
        const loginButton = screen.queryByTestId('login-button');
        const loginInput = screen.queryByTestId('login-input');
        expect(loginButton).toBeTruthy();
        expect(loginInput).toBeTruthy();

        userEvent.paste(loginInput as HTMLElement, 'UserName');
        userEvent.click(loginButton as HTMLElement);

        const logoutButton = screen.queryByTestId('logout-button');
        expect(screen.queryByTestId('login-name')).toBeTruthy();
        expect(logoutButton).toBeTruthy();
        expect(logoutButton).toHaveClass('LogoutButton');
        expect(screen.queryByTestId('login-button')).toBe(null);
        expect(screen.queryByTestId('login-input')).toBe(null);

        userEvent.click(logoutButton as HTMLElement);

        expect(screen.queryByTestId('login-button')).toBeTruthy();
        const input = screen.queryByTestId('login-input');
        expect(input).toBeTruthy();
        expect(input).toHaveClass('LoginInput');

        userEvent.paste(input as HTMLElement, '123');
        expect(store.getState().login.userName).toBe('123');
    });
});

describe('LoginReducer tests', () => {
    test('should return the initial state', () => {
        expect(reducer(undefined, {} as AnyAction)).toEqual({
            userName: '',
            loginStatus: LoginProcessEnum.Logout,
        } as ILoginState);
    });
    test('test changeUserName action', () => {
        expect(reducer({
            userName: '',
            loginStatus: LoginProcessEnum.Logout,
        } as ILoginState, changeUserName('UserName'))).toEqual({
            userName: 'UserName',
            loginStatus: LoginProcessEnum.Logout,
        } as ILoginState);
    });
    test('test login action', () => {
        expect(reducer({
            userName: '',
            loginStatus: LoginProcessEnum.Logout,
        } as ILoginState, login())).toEqual({
            userName: '',
            loginStatus: LoginProcessEnum.Login,
        } as ILoginState);
    });
    test('test logout action', () => {
        expect(reducer({
            userName: 'User Name',
            loginStatus: LoginProcessEnum.Login,
        } as ILoginState, logout())).toEqual({
            userName: '',
            loginStatus: LoginProcessEnum.Logout,
        } as ILoginState);
    });
});
