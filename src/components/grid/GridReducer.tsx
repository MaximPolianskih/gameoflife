import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IGridState {
  field: number[][]
}

export const gridSlice = createSlice({
    name: 'grid',
    initialState: {
        field: [[]],
    } as IGridState,
    reducers: {
        updateField: (state, { payload }: PayloadAction<number[][]>) => {
            state.field = payload;
        },
        setCellActivity: (state, { payload }: PayloadAction<{ row:number, col:number, isActive:boolean }>) => {
            if (state.field[payload.row][payload.col]) {
              state.field[payload.row][payload.col] = payload.isActive ? 1 : 0;
            }
          },
    },
});

export const { updateField, setCellActivity } = gridSlice.actions;
export default gridSlice.reducer;
