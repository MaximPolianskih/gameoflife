import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {ErrorHandler} from '../errorHandler/ErrorHandler';
import {Options} from '../options/Options';
import {changeUserName, ILoginState, login, LoginProcessEnum, logout,} from './LoginReducer';
import {changeOptions, OptionsLoadingEnum} from "../options/OptionsReducer";

export const Login: React.FC = () => {
    const loginState = useSelector<RootState>(
        state => state.login,
    ) as ILoginState;
    const dispatch = useDispatch();

    switch (loginState.loginStatus) {
        case LoginProcessEnum.Login:
            return (
                <div>
                    <span data-testid="login-name">
                        Пользователь: {loginState.userName}
                    </span>
                    <button
                        style={{margin: 10}}
                        data-testid="logout-button"
                        onClick={() => {
                            dispatch(logout());
                            dispatch(changeOptions({status: OptionsLoadingEnum.Loading}));
                        }}
                    >
                        Выйти
                    </button>
                    <ErrorHandler>
                        <Options/>
                    </ErrorHandler>
                </div>
            );
        case LoginProcessEnum.Logout:
            return (
                <div>
                    <label>Введите имя пользователя:</label>
                    <input
                        style={{margin: 10}}
                        data-testid="login-input"
                        type="text"
                        value={loginState.userName}
                        onChange={e => {
                            dispatch(changeUserName(e.target.value));
                        }}
                    />
                    <button
                        data-testid="login-button"
                        onClick={() => {
                            dispatch(login());
                        }}
                    >
                        Войти
                    </button>
                </div>
            );
        default:
            throw Error(
                `Не корректное состояние загрузки настроек пользователя: ${loginState.loginStatus}`,
            );
    }
};
