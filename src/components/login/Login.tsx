import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { ErrorHandler } from '../errorHandler/ErrorHandler';
import Options from '../options/Options';
import {
    changeUserName,
    ILoginState,
    login,
    LoginProcessEnum,
    logout,
} from './LoginReducer';

interface IProp {
    onChange: (row: number, col: number) => void;
    onLoginStatusChange: (loginStatus: LoginProcessEnum) => void;
}

export const Login: React.FC<IProp> = props => {
    const loginState = useSelector<RootState>(
        state => state.login,
    ) as ILoginState;
    const dispatch = useDispatch();
    const [initialLoginStatus, changeLoginStatus] = useState(
        loginState.loginStatus,
    );

    switch (initialLoginStatus) {
        case LoginProcessEnum.Login:
            return (
                <div>
                    <span data-testid="login-name">
                        Пользователь: {loginState.userName}
                    </span>
                    <br></br>
                    <ErrorHandler>
                        <Options
                            userName={loginState.userName}
                            onChange={props.onChange}
                        />
                    </ErrorHandler>
                    <br></br>
                    <button
                        data-testid="logout-button"
                        onClick={() => {
                            dispatch(logout);
                            changeLoginStatus(LoginProcessEnum.Logout);
                            props.onLoginStatusChange(LoginProcessEnum.Logout);
                        }}
                    >
                        Выйти
                    </button>
                </div>
            );
        case LoginProcessEnum.Logout:
            return (
                <div>
                    <label>Введите имя пользователя:</label>
                    <input
                        data-testid="login-input"
                        type="text"
                        value={loginState.userName}
                        onChange={e => {
                            dispatch(changeUserName(e.target.value));
                        }}
                    />
                    <br></br>
                    <button
                        data-testid="login-button"
                        onClick={() => {
                            dispatch(login);
                            changeLoginStatus(LoginProcessEnum.Login);
                            props.onLoginStatusChange(LoginProcessEnum.Login);
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
