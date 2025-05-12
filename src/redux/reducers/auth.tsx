import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AuthReducerProps = {
    isLogged: boolean;
};

const initialState: AuthReducerProps = {
    isLogged: false,
};

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogged(state, action: PayloadAction<boolean>) {
            state.isLogged = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //   builder.addMatcher(apiSlice.endpoints.allCategories.matchFulfilled, (state, action) => {
    //     state.navigationConfig = action.payload;
    //     saveLocallyNavigationConfig(action.payload);
    //   });
    // },
});

export const { setLogged } = auth.actions;
export const { reducer: authReducer } = auth;
