import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ILoginState {
    loginStatus: LoginProcessEnum;
    userName: string;
}

export enum LoginProcessEnum {
    Login,
    Logout
}

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        userName: '',
        loginStatus: LoginProcessEnum.Logout,
    } as ILoginState,
    reducers: {
        changeUserName: (state, { payload }: PayloadAction<string>) => {
            state.userName = payload;
        },
        login: state => {
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
