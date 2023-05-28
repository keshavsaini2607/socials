"use client"

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface UsersState {
   user: any;
}

const initialState: UsersState = {
   user: null,
};

export const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      getUser: (state) => {
         return state.user;
      },
      setUser: (state, action: PayloadAction<any>) => {
         if (action.payload) {
            state.user = action.payload;
         }
      },
   },
});

export const { getUser, setUser } = userSlice.actions;

export default userSlice.reducer;
