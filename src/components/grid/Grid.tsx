import { ReactElement, useState } from 'react';
import cn from 'classnames';
import GridItem from './gridItem/GridItem';
import './grid.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { IGridState, setCellActivity, updateField } from './GridReducer';
import { GameOfLife } from '../../logics/BaseLogic';
import { IOptionState } from '../options/OptionsReducer';

export const Grid: React.FC = () => {
    const gridState = useSelector<RootState>(state => state.grid) as IGridState;
    const optionState = useSelector<RootState>(
        state => state.option,
    ) as IOptionState;
    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (optionState.status === OptionsLoadingEnum.Complete) {
    //         dispatch(
    //             updateField(
    //                 optionState.percent > 0
    //                     ? logic.GenerateRandomState(
    //                           optionState.rows,
    //                           optionState.cols,
    //                           optionState.percent,
    //                       )
    //                     : logic.GetNewArray(optionState.rows, optionState.cols),
    //             ),
    //         );
    //     }
    // });

    const grid: ReactElement[] = [];

    for (let i = 1; i < optionState.rows + 1; i++) {
        for (let j = 1; j < optionState.cols + 1; j++) {
            grid.push(
                <GridItem
                    row={i}
                    col={j}
                    isActive={gridState.field[i][j] === 1}
                    clickHandler={() => {
                        dispatch(
                            setCellActivity({
                                row: i,
                                col: j,
                                isActive: gridState.field[i][j] === 1,
                            }),
                        );
                    }}
                    customStyle={{ gridRowStart: i, gridColumnStart: j }}
                    key={`${i}-${j}`}
                />,
            );
        }
    }

    return (
        <div className="MainField">
            <div className={cn(Grid.name)} role={cn(Grid.name)}>
                {grid}
            </div>
        </div>
    );
};

export default Grid;
