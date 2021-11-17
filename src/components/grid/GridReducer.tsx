import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameOfLife } from '../../logics/BaseLogic';
import { getOptionsFromServer } from '../../services/ServerMock';

export interface IGridState {
  field: number[][]
}
const logic = new GameOfLife();

export const gridSlice = createSlice({
    name: 'grid',
    initialState: {
        field: [[]],
    } as IGridState,
    reducers: {
        updateField: (state, { payload }: PayloadAction<number[][]>) => {
            state.field = payload;
        },
        setCellActivity: (
            state,
            {
                payload,
            }: PayloadAction<{ row: number; col: number; isActive: boolean }>,
        ) => {
            if (state.field[payload.row][payload.col]) {
                state.field[payload.row][payload.col] = payload.isActive
                    ? 1
                    : 0;
            }
        },
    },
    extraReducers: builder => {
        builder.addCase(
            getOptionsFromServer.fulfilled,
            (state, { payload }) => {
                state.field =
                    payload.percent > 0
                        ? logic.GenerateRandomState(
                              payload.rows,
                              payload.cols,
                              payload.percent,
                          )
                        : logic.GetNewArray(payload.rows, payload.cols);
            },
        );
    },
});

export const { updateField, setCellActivity } = gridSlice.actions;
export default gridSlice.reducer;
