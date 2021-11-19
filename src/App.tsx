import cn from 'classnames';
import Grid from './components/grid/Grid';
import React, {useState} from 'react';
import {Login} from './components/login/Login';
import GameMenu from './components/gameMenu/GameMenu';
import {ILoginState, LoginProcessEnum} from './components/login/LoginReducer';
import {RootState} from './store/store';
import {useDispatch, useSelector} from 'react-redux';
import {GameOfLife} from './logics/BaseLogic';
import {
    IOptionState,
} from './components/options/OptionsReducer';
import {nextIteration} from './components/grid/GridReducer';
import {IGameMenuState} from "./components/gameMenu/GameMenuReducer";
import {gameLoop} from './components/gameLoop/GameLoop';

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
            <label>Game of life</label>
            <Login/>
        </div>
    );
};

export default App;

