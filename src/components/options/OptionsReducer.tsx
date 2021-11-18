import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    PutOptionsToServer,
    IOption,
    getOptionsFromServer
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

export const optionSlice = createSlice({
    name: 'login',
    initialState: {
        rows: 0,
        cols: 0,
        percent: 0,
        speed: SpeedEnum.Fast,
        status: OptionsLoadingEnum.Loading,
    } as IOptionState,
    reducers: {
        applyOptions: (state, { payload }: PayloadAction<string>) => {
            PutOptionsToServer(payload, {
                ...state
            } as IOption);
        },
        changeOptions: (state, { payload }) => {
          return {...state, ...payload}
        },
    },
    extraReducers: builder => {
        builder.addCase(getOptionsFromServer.pending, state => {
            state.status = OptionsLoadingEnum.Loading;
        });
        builder.addCase(
            getOptionsFromServer.fulfilled,
            (state, { payload }) => {
              return {
                  ...state,
                  ...payload,
                  status: OptionsLoadingEnum.Complete,
              };
            },
        );
        builder.addCase(getOptionsFromServer.rejected, state => {
            state.status = OptionsLoadingEnum.Error;
        });
    }
});

export const { applyOptions, changeOptions } = optionSlice.actions;
export default optionSlice.reducer;
