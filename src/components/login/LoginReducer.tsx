import { createSlice } from '@reduxjs/toolkit';

export interface ILoginState {
    loginStatus: LoginProcessEnum;
    userName: string;
}

export enum LoginProcessEnum {
    Login,
    Logout,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        userName: '',
        loginStatus: LoginProcessEnum.Logout,
    } as ILoginState,
    reducers: {
        changeUserName: (state, action) => {
            state.userName = action.payload;
        },
        login: (state) => {
            state.loginStatus = LoginProcessEnum.Login;
        },
        logout: state => {
            state.userName = '';
            state.loginStatus = LoginProcessEnum.Logout;
        },
    },
});

export const { login, logout, changeUserName } = loginSlice.actions;

export default loginSlice.reducer;
