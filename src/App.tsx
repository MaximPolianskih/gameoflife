import cn from 'classnames';
import Grid from './components/grid/Grid';
import React from 'react';
import { Login } from './components/login/Login';
import GameMenu from './components/gameMenu/GameMenu';
import { ILoginState, LoginProcessEnum } from './components/login/LoginReducer';
import { RootState } from './store/store';
import { useDispatch, useSelector } from 'react-redux';
import { GameOfLife } from './logics/BaseLogic';
import {
    IOptionState,
} from './components/options/OptionsReducer';

export const App: React.FC = () => {
    const loginState = useSelector<RootState>(
        state => state.login,
    ) as ILoginState;
    const optionState = useSelector<RootState>(
        state => state.option,
    ) as IOptionState;
    const dispatch = useDispatch();
    const logic = new GameOfLife();

    if (loginState.loginStatus === LoginProcessEnum.Login) {
        return (
            <div className={cn(App.name)}>
                <label>Game of life</label>
                <Login />
                <br></br>
                <GameMenu />
                <br></br>
                <Grid />
            </div>
        );
    }

    return (
        <div className={cn(App.name)}>
            <label>Game of life</label>
            <Login />
        </div>
    );
};

export default App;
function dispatch(arg0: any) {
    throw new Error('Function not implemented.');
}
