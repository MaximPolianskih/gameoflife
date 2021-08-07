import cn from 'classnames';
import { CSSProperties } from 'react';
import './grid-item.css';

interface IGridItem {
  col: number;
  row: number;
  isActive: Boolean;
  clickHandler: (row: number, col: number) => void;
  customStyle?: CSSProperties;
}

function GridItem({
  col,
  row,
  isActive,
  clickHandler,
  customStyle,
}: IGridItem) {
  return (
    <div
      className={cn(GridItem.name)}
      style={customStyle}
      onClick={() => clickHandler(col, row)}
    >
      <label className={cn('label')}>{isActive ? `${col}, ${row}` : ''}</label>
    </div>
  );
}

export default GridItem;
