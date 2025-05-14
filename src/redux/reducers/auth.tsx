// import { createSlice } from '@reduxjs/toolkit';
// import { authApi } from '..';
// import { ALERTS } from '~/constants';
// import { store } from '../store/configure-store';
// import { setAppError, setAppLoader } from '../store/app-slice';

// export type AuthState = {
//   isAuthenticated: boolean;
// }

// const initialState: AuthState = {
//   isAuthenticated: false,
// };

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     logout(state) {
//       state.isAuthenticated = false;
//     },
//   },
//   extraReducers: (builder) => {
//         builder.addMatcher(authApi.endpoints.signUp.matchRejected, (state, action) => {
//           const { status } = action.payload || {};
//           const statusCode: number = Number(status) || 500;
//             const error = {
//               title: ALERTS.login[statusCode]?.title || '',
//                 body: ALERTS.registration[statusCode]?.body || '',
//             };
//           store.dispatch(setAppError(error), setAppLoader(false))
//           state.isAuthenticated = false;
//         })
//         .addMatcher(authApi.endpoints.signIn.matchRejected, (state, action) => {
//             console.log(action.payload);
//             const { status } = action.payload || {};
//             const statusCode: number = Number(status) || 500;

//             const error = {
//                 title: ALERTS.login[statusCode]?.title || '',
//                 body: ALERTS.login[statusCode]?.body || '',
//             };
//           store.dispatch(setAppError(error), setAppLoader(false))
//           state.isAuthenticated = false;
//         })
//       .addMatcher(authApi.endpoints.signUp.matchPending, () => {
//         store.dispatch(setAppLoader(true))
//       })
//       .addMatcher(authApi.endpoints.signIn.matchPending, () => {
//         store.dispatch(setAppLoader(true))
//       })
//       .addMatcher(authApi.endpoints.signUp.matchFulfilled, (state) => {
//         store.dispatch(setAppLoader(false))
//         state.isAuthenticated = true;
//       })
//       .addMatcher(authApi.endpoints.signIn.matchFulfilled, (state) => {
//         store.dispatch(setAppLoader(false))
//         state.isAuthenticated = true;
//       })
//       .addMatcher(authApi.endpoints.signUp.matchRejected, (state) => {
//         store.dispatch(setAppLoader(false))
//         state.isAuthenticated = false;
//       })
//       .addMatcher(authApi.endpoints.signIn.matchRejected, (state) => {
//         store.dispatch(setAppLoader(false))
//         state.isAuthenticated = false;
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;
