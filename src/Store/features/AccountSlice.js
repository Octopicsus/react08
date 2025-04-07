import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuth: false, login: '', token:'', lastSignedIn: ''}

const AccountSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        signIn: (state,action) =>{
            state.isAuth = true;
            state.login = action.payload.login;
            state.lastSignedIn = Date.now();
        },
        signOut: (state, action) =>{
            state.isAuth = false;
            state.login = '';
            state.token = '';
            state.lastSignedIn = '';
        }
    }
});
 
export const {signIn, signOut} = AccountSlice.actions;
export default AccountSlice.reducer;