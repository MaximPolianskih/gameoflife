import cn from 'classnames';
import { CSSProperties, useState } from 'react';
import './grid-item.css';

interface IGridItem {
  col: number;
  row: number;
  isActive: boolean;
  clickHandler: (row: number, col: number) => void;
  customStyle?: CSSProperties;
}

function GridItem({
  col = 0,
  row = 0,
  isActive = false,
  clickHandler,
  customStyle,
}: IGridItem) {
  const [gridItemState, isActiveSetter] = useState({
    isActive: isActive,
    col: col,
    row: row,
  });
  return (
    <div
      className={cn(GridItem.name)}
      role={cn(GridItem.name)}
      style={{
        ...customStyle,
        ...(gridItemState.isActive
          ? { backgroundColor: 'green' }
          : { backgroundColor: 'white' }),
      }}
      onClick={() => {
        clickHandler && clickHandler(col, row);
        isActiveSetter({ isActive: !gridItemState.isActive, col, row });
      }}
    >
      <label className={cn('label')}>
        {gridItemState.isActive
          ? `${gridItemState.col}, ${gridItemState.row}`
          : ''}
      </label>
    </div>
  );
}

export default GridItem;
