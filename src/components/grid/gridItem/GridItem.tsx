import cn from 'classnames';
import React, {CSSProperties} from 'react';
import './grid-item.css';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {IGridState} from '../GridReducer';

interface IGridItem {
    col: number;
    row: number;
    clickHandler: (row: number, col: number) => void;
    customStyle?: CSSProperties;
}

export const GridItem: React.FC<IGridItem> = props => {
    const gridState = useSelector<RootState>(state => state.grid) as IGridState;

    return (
        <div
            className="GridItem"
            data-testid="grid-item"
            style={{
                ...(isActive(gridState, props.row, props.col)
                    ? {backgroundColor: `rgb(0, ${255 - 10 * (gridState.field[props.row][props.col] - 1)}, 0)`}
                    : {backgroundColor: 'white'}),
                ...props.customStyle
            }}
            onClick={() => {
                props.clickHandler && props.clickHandler(props.col, props.row);
            }}
        ></div>
    );
};

const isActive = (state: IGridState, row: number, col: number): boolean => {
    if (!state) {
        return false;
    }
    if(!state.field.length || !state.field[0].length)
    {
        return false;
    }

    return state.field[row][col] >= 1;
}
export default GridItem;
