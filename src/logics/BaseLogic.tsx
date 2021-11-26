export class GameOfLife {
    public CalculateNextState(currentState: number[][]): number[][] {
        const rows = currentState.length;
        const cols = currentState[0].length;
        let newState = this.GetNewArray(rows, cols);

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                let neighborCount = this.GetNeihborCount(currentState, i, rows, j, cols);

                if (currentState[i][j] === 0 && neighborCount === 3) {
                    newState[i][j] = 1;
                    continue;
                }

                if (currentState[i][j] >= 1
                    && neighborCount >= 2
                    && neighborCount <= 3
                ) {
                    newState[i][j] = currentState[i][j] + 1;
                } else {
                    newState[i][j] = 0;
                }
            }
        }
        return newState;
    }

    public GetNewArray(rows: number, cols: number) {
        return new Array(rows).fill(0).map(() => new Array(cols).fill(0));
    }

    public GenerateRandomState(rows: number, cols: number, percent: number): number[][] {
        percent = percent > 100 ? 100 : percent;
        const aliveFields = Math.round(rows * cols * percent / 100);
        let resultField: number[][] = new Array(rows)
            .fill(0)
            .map(() => new Array(cols).fill(0));

        do {
            const row = this.RandomInteger(0, rows - 1);
            const col = this.RandomInteger(0, cols - 1);

            if (resultField[row][col] === 1) {
                continue;
            }

            resultField[row][col] = 1;

            const aliveCount = GameOfLife.GetAliveCount(resultField);

            if (aliveCount >= aliveFields) {
                break;
            }
        } while (true);

        return resultField;
    }

    public static GetAliveCount(field: number[][]){
        const alive = field.map(x => x.filter(y => y == 1).length);
        const aliveCount = alive.reduce((sum, cur) => sum + cur, 0);

        return aliveCount;
    }

    private GetNeihborCount(currentState: number[][], i: number, rows: number, j: number, cols: number) {
        let neighborCount = currentState[this.GetIndex(i - 1, rows)][this.GetIndex(j - 1, cols)] >= 1 ? 1 : 0;
        neighborCount += currentState[this.GetIndex(i - 1, rows)][this.GetIndex(j, cols)] >= 1 ? 1 : 0;
        neighborCount += currentState[this.GetIndex(i - 1, rows)][this.GetIndex(j + 1, cols)] >= 1 ? 1 : 0;
        neighborCount += currentState[this.GetIndex(i, rows)][this.GetIndex(j - 1, cols)] >= 1 ? 1 : 0;
        neighborCount += currentState[this.GetIndex(i, rows)][this.GetIndex(j + 1, cols)] >= 1 ? 1 : 0;
        neighborCount += currentState[this.GetIndex(i + 1, rows)][this.GetIndex(j - 1, cols)] >= 1 ? 1 : 0;
        neighborCount += currentState[this.GetIndex(i + 1, rows)][this.GetIndex(j, cols)] >= 1 ? 1 : 0;
        neighborCount += currentState[this.GetIndex(i + 1, rows)][this.GetIndex(j + 1, cols)] >= 1 ? 1 : 0;
        return neighborCount;
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

    private RandomInteger(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
