import cn from 'classnames';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { generateField, nextIteration } from '../grid/GridReducer';
import { IOptionState } from '../options/OptionsReducer';
import { IGameMenuState } from './GameMenuReducer';

export const GameMenu: React.FC = () => {
    const optionState = useSelector<RootState>(
        state => state.option,
    ) as IOptionState;
    // const gameMenuState = useSelector<RootState>(
    //     state => state.option,
    // ) as IGameMenuState;
    const dispatch = useDispatch();
    let isRunning: boolean = false;
    const gameLoop = async () => {
        do {
            dispatch(nextIteration());
            await new Promise(f => setTimeout(f, 1000 / optionState.speed));
        } while (isRunning);
    };

    return (
        <div className={cn(GameMenu.name)}>
            <button
                data-testid={'game-menu-button-start'}
                onClick={() => {
                    isRunning = true;
                    gameLoop();
                }}
            >
                Запустить
            </button>
            <button
                data-testid={'game-menu-button-pause'}
                onClick={() => {
                    isRunning = false;
                }}
            >
                Пауза
            </button>
            <button
                data-testid={'game-menu-button-reset'}
          onClick={() => {
                   isRunning = false;
                    dispatch(generateField(optionState));
                }}
            >
                Сбросить
            </button>
        </div>
    );
};

export default GameMenu;
