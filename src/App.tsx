import cn from 'classnames';
import Grid from './components/grid/Grid';
import React, { useState } from 'react';
import { Login } from './components/login/Login';
import GameMenu from './components/gameMenu/GameMenu';
import { LoginProcessEnum } from './components/login/LoginReducer';

function App() {
    const [currentState, setState] = useState({
        rows: 0,
        cols: 0,
        loginStatus: LoginProcessEnum.Logout,
    });
    const onFieldSizeHandler = (rows: number, cols: number): void =>
        setState(prevState => {
            return {
                ...prevState,
                rows,
                cols,
            };
        });

    const onLoginStatusChangeHandler = (loginStatus: LoginProcessEnum): void =>
        setState(prevState => {
            return {
                ...prevState,
                loginStatus,
            };
        });

    if (currentState.loginStatus === LoginProcessEnum.Login) {
        return (
            <div className={cn(App.name)}>
                <label>Game of life</label>
                <Login
                    onChange={onFieldSizeHandler}
                    onLoginStatusChange={onLoginStatusChangeHandler}
                />
                <br></br>
                <GameMenu />
                <br></br>
                <Grid rows={currentState.rows} cols={currentState.cols} />
            </div>
        );
    }
    return (
        <div className={cn(App.name)}>
            <label>Game of life</label>
            <Login
                onChange={onFieldSizeHandler}
                onLoginStatusChange={onLoginStatusChangeHandler}
            />
        </div>
    );
}

export default App;
