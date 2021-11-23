import cn from 'classnames';
import Grid from './components/grid/Grid';
import React from 'react';
import {Login} from './components/login/Login';
import GameMenu from './components/gameMenu/GameMenu';
import {ILoginState, LoginProcessEnum} from './components/login/LoginReducer';
import {RootState} from './store/store';
import {useSelector} from 'react-redux';
import {gameLoop} from './components/gameLoop/GameLoop';
import './app.css';

export const App: React.FC = () => {
    const loginState = useSelector<RootState>(
        state => state.login,
    ) as ILoginState;

    gameLoop();

    if (loginState.loginStatus === LoginProcessEnum.Login) {
        return (
            <div className={cn(App.name)}>
                <div>
                    <Login/>
                </div>
                <div>
                    <GameMenu/>
                    <br></br>
                    <Grid/>
                </div>
            </div>
        );
    }

    return (
        <div className={cn(App.name)}>
            <Login/>
        </div>
    );
};

export default App;

