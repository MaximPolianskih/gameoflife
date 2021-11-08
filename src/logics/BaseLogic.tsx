export class GameOfLife {
  public CalculateNextState(currentState: number[][]): number[][] {
    const rows = currentState.length;
    const cols = currentState[0].length;
    let newState = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let neighborCount = currentState[this.GetIndex(i - 1,rows)][this.GetIndex(j - 1, cols)];
        neighborCount += currentState[this.GetIndex(i - 1,rows)][this.GetIndex(j, cols)];
        neighborCount += currentState[this.GetIndex(i - 1,rows)][this.GetIndex(j + 1, cols)];
        neighborCount += currentState[this.GetIndex(i,rows)][this.GetIndex(j - 1, cols)];
        neighborCount += currentState[this.GetIndex(i,rows)][this.GetIndex(j + 1, cols)];
        neighborCount += currentState[this.GetIndex(i + 1,rows)][this.GetIndex(j - 1, cols)];
        neighborCount += currentState[this.GetIndex(i + 1,rows)][this.GetIndex(j, cols)];
        neighborCount += currentState[this.GetIndex(i + 1,rows)][this.GetIndex(j + 1, cols)];

        if (currentState[i][j] === 0 && neighborCount === 3) {
          newState[i][j] = 1;
          continue;
        }

        if (
          currentState[i][j] === 1 &&
          neighborCount >= 2 &&
          neighborCount <= 3
        ) {
          newState[i][j] = 1;
        } else {
          newState[i][j] = 0;
        }
      }
    }
    return newState;
  }

  public GenerateRandomState(rows:number, cols:number, percent: number): number[][] {
    const aliveFields = Math.round(rows * cols * percent / 100);
    let resultField: number[][] = new Array(rows)
        .fill(0)
        .map(() => new Array(cols).fill(0));
    let i = 0;

    do {
      const row = this.RandomInteger(0, rows-1);
      const col = this.RandomInteger(0, cols-1);
      
      if (resultField[row][col] === 1) {
          continue;
      }

      i++;
      resultField[row][col] = 1;
    } while (i < aliveFields);

    return resultField;
  }

  //Заворачиваем поле в тор
  private GetIndex(index: number, length: number): number {
    if (index < 0) {
      return length - 1;
    }

    if (index === length) {
      return 0;
    }

    return index;
  }

  private RandomInteger(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
