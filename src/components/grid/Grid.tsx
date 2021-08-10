import { ReactElement, useState } from 'react';
import cn from 'classnames';
import GridItem from './gridItem/GridItem';
import './grid.css';

interface IGridProps {
  cols: number;
  rows: number;
}

function Grid({ rows, cols }: IGridProps) {
  const grid: ReactElement[] = [];
  const [selectItem, setSelectItem] = useState({ row: 0, col: 0 });
  const ItemClickHandler = (row: number, col: number): void => setSelectItem({ row, col });

  for (let i = 1; i < rows + 1; i++) {
    for (let j = 1; j < cols + 1; j++) {
      grid.push(
        <GridItem
          col={i}
          row={j}
          isActive={false}
          clickHandler={ItemClickHandler}
          customStyle={{ gridRowStart: i, gridColumnStart: j }}
        />
      );
    }
  }

  return (
    <div>
      <label>
        Выбрана я чейка: {selectItem.row}, {selectItem.col}
      </label>
      <div className={cn(Grid.name)} role={cn(Grid.name)}>
        {grid}
      </div>
    </div>
  );
}

export default Grid;
