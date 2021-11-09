import { ReactElement, useState } from 'react';
import cn from 'classnames';
import GridItem from './gridItem/GridItem';
import './grid.css';
import React from 'react';

interface IGridProps {
  cols: number;
  rows: number;
}

function Grid({ rows, cols }: IGridProps) {
  const grid: ReactElement[] = [];

  for (let i = 1; i < rows + 1; i++) {
    for (let j = 1; j < cols + 1; j++) {
      grid.push(
        <GridItem
          col={i}
          row={j}
          isActive={false}
          clickHandler={() => {/*TODO сделать ручное заполнение*/ }}
          customStyle={{ gridRowStart: i, gridColumnStart: j }}
          key = {`${i}-${j}`}
        />
      );
    }
  }

  return (
    <div>
      <div className={cn(Grid.name)} role={cn(Grid.name)}>
        {grid}
      </div>
    </div>
  );
}

export default Grid;