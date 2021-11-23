import React, {ReactElement} from 'react';
import cn from 'classnames';
import GridItem from './gridItem/GridItem';
import './grid.css';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {IGridState, setCellActivity} from './GridReducer';
import {IOptionState} from '../options/OptionsReducer';

export const Grid: React.FC = () => {
    const gridState = useSelector<RootState>(state => state.grid) as IGridState;
    const optionState = useSelector<RootState>(
        state => state.option,
    ) as IOptionState;
    const dispatch = useDispatch();

    const grid: ReactElement[] = [];

    for (let i = 0; i < optionState.rows; i++) {
        for (let j = 0; j < optionState.cols; j++) {
            grid.push(
                <GridItem
                    row={i}
                    col={j}
                    clickHandler={() => {
                        dispatch(
                            setCellActivity({
                                row: i,
                                col: j,
                                isActive: gridState.field[i][j] === 0,
                            }),
                        );
                    }}
                    customStyle={{
                        gridRowStart: i + 1,
                        gridColumnStart: j + 1,
                    }}
                    key={`${i}-${j}`}
                />,
            );
        }
    }

    return (
        <div className="Grid" role="Grid">
            {grid}
        </div>
    );
};

export default Grid;
