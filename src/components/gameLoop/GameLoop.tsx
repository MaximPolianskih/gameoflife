import React, {useEffect, useRef} from "react";
import {IGridState, nextIteration} from "../grid/GridReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {IGameMenuState, stopGame} from "../gameMenu/GameMenuReducer";
import {IOptionState} from "../options/OptionsReducer";

export const gameLoop = () => {
    const gameMenuState = useSelector<RootState>(
        state => state.gameMenu
    ) as IGameMenuState;
    const optionState = useSelector<RootState>(
        state => state.option
    ) as IOptionState;
    const gridState = useSelector<RootState>(
        state => state.grid
    ) as IGridState;
    const dispatch = useDispatch();

    const requestId = useRef<number>();
    const previousTime = useRef<number>(0);
    const isGameRunning = useRef<boolean>(gameMenuState.isGameRunning);
    const speed = useRef<number>(optionState.speed);
    const gridField = useRef<number[][]>(gridState.field);

    const loop = (time: number) => {
        const deltaTime = time - previousTime.current;

        if (deltaTime >= 1024 / speed.current) {
            previousTime.current = time;

            if (isGameRunning.current) {
                dispatch(nextIteration());

                //TODO Запилить/найти нормальную функцию сравнения
                // if(JSON.stringify(gridState.field) === JSON.stringify(gridField.current)){
                //     dispatch(stopGame());
                // }

                gridField.current = [...gridState.field];
            }
        }

        requestId.current = requestAnimationFrame(loop);
    }

    useEffect(() => {
        requestId.current = requestAnimationFrame(loop);
        isGameRunning.current = gameMenuState.isGameRunning;
        speed.current = optionState.speed;

        return () => cancelAnimationFrame(requestId.current as number);
    }, [gameMenuState.isGameRunning, optionState.speed, gridState.field]);
}
