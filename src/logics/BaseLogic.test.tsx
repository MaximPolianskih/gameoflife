import { GameOfLife } from './BaseLogic';

describe('Test base logic game of life', () => {
    const generatorDataSets = [
        [3, 3, 10],
        [3, 3, 90],
        [5, 5, 50],
        [8, 3, 30],
        [8, 3, 146],
        [100, 100, 50],
        [100, 100, 55],
        [100, 100, 60],
    ];
    it.each(generatorDataSets)('Test GenerateRandomState', (rows, cols, percent) => {
        const logic = new GameOfLife();
        var generatedField = logic.GenerateRandomState(rows, cols, percent);
        const aliveCount = generatedField.flat().filter(f => f === 1).length;

        expect(aliveCount).toBe(Math.round(rows * cols * (percent > 100 ? 100 : percent) / 100));
    });

    const dataSets = [
        [
            [
                [0, 1, 0],
                [1, 0, 1],
                [0, 1, 0],
            ],
            [
                [0, 2, 0],
                [2, 0, 2],
                [0, 2, 0],
            ],
        ],
        [
            [
                [0, 1, 0],
                [1, 1, 1],
                [0, 1, 0],
            ],
            [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0],
            ],
        ],
        [
            [
                [0, 1, 0, 0],
                [1, 0, 1, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0],
            ],
            [
                [1, 2, 1, 0],
                [2, 0, 2, 0],
                [1, 2, 1, 0],
                [1, 2, 1, 0],
            ],
        ],
        [
            [
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0, 0],
                [0, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
            ],
            [
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 2, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],
            ],
        ],

    ];
    it.each(dataSets)(
        'Test CalculateNextState',
        (originState: number[][], expectedState: number[][]) => {
            const logic = new GameOfLife();

            const newState = logic.CalculateNextState(originState);
            expect(newState).toEqual(expectedState);
            expect(newState.length).toEqual(originState.length);
            expect(newState[0].length).toEqual(originState[0].length);
        },
    );
});
