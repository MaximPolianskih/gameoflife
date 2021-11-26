import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetOptionsFromServer, IOption } from '../services/ServerMock';

export const getOptionsFromServer = createAsyncThunk(
    'options/GetOptionsFromServer',
    async (userName: string) => {
        const response = (await GetOptionsFromServer(userName)) as IOption;
        return response;
    },
);
