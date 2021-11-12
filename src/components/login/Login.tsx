import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  const loginStatus = useSelector(state => (state as ILoginState).loginStatus);
  const userName = useSelector(state => (state as ILoginState).userName);
    const dispatch = useDispatch();

    switch (loginStatus) {
        case LoginProcessEnum.Login:
            return (
                <div>
                    <span data-testid="login-name">
                        Пользователь: {userName}
                    </span>
                    <br></br>
                    <ErrorHandler>
                        <Options
                            userName={userName}
                            onChange={props.onChange}
                        />
                    </ErrorHandler>
                    <br></br>
                    <button
                        data-testid="logout-button"
                        onClick={() => {
                            dispatch(logout);
                            props.onLoginStatusChange(LoginProcessEnum.Login);
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
                        value={userName}
                        onChange={e => {
                            dispatch(changeUserName(e.target.value));
                        }}
                    />
                    <br></br>
                    <button
                        data-testid="login-button"
                        onClick={() => {
                            dispatch(login);
                        }}
                    >
                        Войти
                    </button>
                </div>
            );
        default:
            throw Error(
                `Не корректное состояние загрузки настроек пользователя: ${loginStatus}`,
            );
    }
};
