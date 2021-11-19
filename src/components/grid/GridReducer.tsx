import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GameOfLife} from '../../logics/BaseLogic';
import {getOptionsFromServer} from '../../actions/Actions';
import {IOption} from '../../services/ServerMock';

export interface IGridState {
    field: number[][];
}

const logic = new GameOfLife();
export const SetNewField = (state: IGridState, payload: IOption) => {
    state.field =
        payload.percent > 0
            ? logic.GenerateRandomState(
            payload.rows,
            payload.cols,
            payload.percent,
            )
            : logic.GetNewArray(payload.rows, payload.cols);
};

export const gridSlice = createSlice({
    name: 'grid',
    initialState: {
        field: [[]],
    } as IGridState,
    reducers: {
        nextIteration: state => {
            state.field = logic.CalculateNextState(state.field);
        },
        generateField: (state, {payload}: PayloadAction<IOption>) =>
            SetNewField(state, payload),
        setCellActivity: (state,
                          {payload}: PayloadAction<{ row: number; col: number; isActive: boolean }>,) => {
            state.field[payload.row][payload.col] = payload.isActive
                ? 1
                : 0;
        },
    },
    extraReducers: builder => {
        builder.addCase(getOptionsFromServer.fulfilled, (state, {payload}) =>
            SetNewField(state, payload),
        );
    },
});

export const {nextIteration, generateField, setCellActivity} = gridSlice.actions;
export default gridSlice.reducer;
