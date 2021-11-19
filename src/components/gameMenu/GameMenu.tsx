import cn from 'classnames';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {generateField} from '../grid/GridReducer';
import {IOptionState} from '../options/OptionsReducer';
import {IGameMenuState, startGame, stopGame} from './GameMenuReducer';

export const GameMenu: React.FC = () => {
    const optionState = useSelector<RootState>(
        state => state.option,
    ) as IOptionState;
    const gameMenuState = useSelector<RootState>(
        state => state.option,
    ) as IGameMenuState;
    const dispatch = useDispatch();

    return (
        <div className={cn(GameMenu.name)}>
            <button
                data-testid={'game-menu-button-start'}
                onClick={() => {
                    dispatch(startGame());
                }}
            >
                Запустить
            </button>
            <button
                data-testid={'game-menu-button-pause'}
                onClick={() => {
                    dispatch(stopGame());
                }}
            >
                Пауза
            </button>
            <button
                data-testid={'game-menu-button-reset'}
                onClick={() => {
                    dispatch(stopGame());
                    dispatch(generateField(optionState));
                }}
            >
                Сбросить
            </button>
        </div>
    );
};

export default GameMenu;
