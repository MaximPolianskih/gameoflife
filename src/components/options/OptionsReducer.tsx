import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    PutOptionsToServer,
    IOption,
    GetOptionsFromServer,
} from '../../services/ServerMock';
import { SpeedEnum } from './speedRegulator/SpeedRegulatorReducer';

export interface IOptionState {
    rows: number;
    cols: number;
    percent: number;
    speed: number;
    status: OptionsLoadingEnum;
}

export enum OptionsLoadingEnum {
    Loading,
    Complete,
    Error,
}

export const getOptionsFromServer = createAsyncThunk(
    'options/GetOptionsFromServer',
    async (userName: string) => {
        const response = (await GetOptionsFromServer(userName)) as IOption;
        return response;
    },
);

export const optionSlice = createSlice({
    name: 'login',
    initialState: {
        rows: 0,
        cols: 0,
        percent: 0,
        speed: SpeedEnum.Slow,
        status: OptionsLoadingEnum.Loading,
    } as IOptionState,
    reducers: {
        applyOptions: (state, { payload }: PayloadAction<string>) => {
            PutOptionsToServer(payload, {
                rows: state.rows,
                cols: state.cols,
                percent: state.percent,
                speed: state.speed,
            } as IOption);
        },
        changeOptions: (state, { payload }) => {
            state.cols = payload.cols;
            state.rows = payload.rows;
            state.percent = payload.percent;
            state.speed = payload.speed;
        },
    },
    extraReducers: builder => {
        builder.addCase(getOptionsFromServer.pending, state => {
            state.status = OptionsLoadingEnum.Loading;
        });
        builder.addCase(
            getOptionsFromServer.fulfilled,
            (state, { payload }) => {
                state.status = OptionsLoadingEnum.Complete;
                state.cols = payload.cols;
                state.rows = payload.rows;
                state.percent = payload.percent;
                state.speed = payload.speed;
            },
        );
        builder.addCase(getOptionsFromServer.rejected, state => {
            state.status = OptionsLoadingEnum.Error;
        });
    },
});

export const { applyOptions, changeOptions } = optionSlice.actions;
export default optionSlice.reducer;
