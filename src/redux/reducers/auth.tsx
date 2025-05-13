// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { authApi } from '..';

// export type AuthReducerProps = {
//     isLogged: boolean;
// };

// const initialState: AuthReducerProps = {
//     isLogged: false,
// };

// const auth = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         setLogged(state, action: PayloadAction<boolean>) {
//             state.isLogged = action.payload;
//         },
//     },
//     extraReducers: (builder) => {
//         builder.addMatcher(authApi.endpoints.signIn.matchFulfilled, (state) => {
//             state.isLogged = true;
//             state.errorMessage = null;
//         });

//         builder.addMatcher(authApi.endpoints.signIn.matchRejected, (state, action) => {
//             if (action.payload) {
//                 state.errorMessage = `Ошибка: ${action.payload.status} - ${action.payload.data?.message}`;
//             } else {
//                 state.errorMessage = "Неизвестная ошибка";
//             }
//         });

//         builder.addMatcher(authApi.endpoints.signOut.matchFulfilled, (state) => {
//             state.isLogged = false;
//             state.errorMessage = null;
//         });
//     },

// });

// export const { setLogged } = auth.actions;
// export const { reducer: authReducer } = auth;
