import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import LoginReducer from '../components/login/LoginReducer';

export const store = configureStore({
    reducer: { login: LoginReducer },
    middleware: [thunk],
});
