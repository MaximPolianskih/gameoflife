import { createSlice } from '@reduxjs/toolkit';

export const optionSlice = createSlice({
    name: 'login',
    initialState: {
        isLoading: false,
        rows: 0,
        cols: 0,
        percent: 0
    },
    reducers: {
        loadOptions: (state, action) => {
            
        },
        applyOptions: state => {
           
        },
    },
});

export const { loadOptions, applyOptions } = optionSlice.actions;

export default optionSlice.reducer;
