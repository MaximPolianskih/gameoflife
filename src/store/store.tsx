import {applyMiddleware, combineReducers, compose, configureStore, createStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import GameMenuReducer from '../components/gameMenu/GameMenuReducer';
import GridReducer from '../components/grid/GridReducer';
import LoginReducer from '../components/login/LoginReducer';
import OptionsReducer from '../components/options/OptionsReducer';

export const store = configureStore({
    reducer: {
        login: LoginReducer,
        option: OptionsReducer,
        grid: GridReducer,
        gameMenu: GameMenuReducer,
    },
    middleware: [thunk],
});

export const createTestStore = () => createStore(
    combineReducers({
        login: LoginReducer,
        option: OptionsReducer,
        grid: GridReducer,
        gameMenu: GameMenuReducer,
    }),
    compose(
        applyMiddleware(thunk)
    )
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
