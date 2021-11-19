import cn from 'classnames';
import React, {CSSProperties, useState} from 'react';
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
    const [gridItemState, isActiveSetter] = useState({
        col: props.col,
        row: props.row,
    });
    const gridState = useSelector<RootState>(state => state.grid) as IGridState;

    return (
        <div
            className={cn(GridItem.name)}
            role={cn(GridItem.name)}
            style={{
                ...props.customStyle,
                ...(gridState.field[props.row][props.col] === 1
                    ? {backgroundColor: 'green'}
                    : {backgroundColor: 'white'}),
            }}
            onClick={() => {
                props.clickHandler && props.clickHandler(props.col, props.row);
            }}
        ></div>
    );
};

export default GridItem;
