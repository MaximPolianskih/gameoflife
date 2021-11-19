import {createSlice} from '@reduxjs/toolkit';

export interface IGameMenuState {
    isGameRunning: boolean;
}

export const gameMenuSlice = createSlice({
    name: 'gameMenu',
    initialState: {
        isGameRunning: false,
    } as IGameMenuState,
    reducers: {
        startGame: state => {
            state.isGameRunning = true;
        },
        stopGame: state => {
            state.isGameRunning = false;
        },
    },
});

export const {startGame, stopGame} = gameMenuSlice.actions;
export default gameMenuSlice.reducer;
