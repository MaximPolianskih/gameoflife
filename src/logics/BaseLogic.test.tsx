import { GameOfLife } from './BaseLogic';

describe('Test base logic game of life', () => {
  const genaratorDataSets = [
      [3, 3, 10],
      [3, 3, 90],
      [5, 5, 50],
      [8,3, 30],
  ];
    it.each(genaratorDataSets)('Test GenerateRandomState', (rows, cols, percent) => {
        const logic = new GameOfLife();
        var generatedField = logic.GenerateRandomState(rows, cols, percent);
        const aliveCount = generatedField.flat().filter(f => f === 1).length;
        expect(aliveCount).toBe(Math.round((rows * cols * percent) / 100));
    });
  
  const dataSets = [
      [
          [
              [0, 1, 0],
              [1, 0, 1],
              [0, 1, 0]
          ],
          [
              [0, 1, 0],
              [1, 0, 1],
              [0, 1, 0]
          ]
      ],
      [
          [
              [0, 1, 0],
              [1, 1, 1],
              [0, 1, 0]
          ],
          [
              [0, 0, 0],
              [0, 0, 0],
              [0, 0, 0]
          ]
      ],
      [
          [
              [0, 1, 0, 0],
              [1, 0, 1, 0],
              [0, 1, 0, 0],
              [0, 1, 0, 0]
          ],
          [
              [1, 1, 1, 0],
              [1, 0, 1, 0],
              [1, 1, 1, 0],
              [1, 1, 1, 0]
          ]
      ],
  ];
    it.each(dataSets)(
        'Test CalculateNextState',
        (originState: number[][], expectedState: number[][]) => {
            const logic = new GameOfLife();

            const newState = logic.CalculateNextState(originState);
            expect(newState).toEqual(expectedState);
        },
    );
});
