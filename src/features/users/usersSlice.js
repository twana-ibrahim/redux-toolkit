import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    name: "Twana Ibrahim",
  },
  {
    id: "1",
    name: "Ibrahim Ahmad",
  },
  {
    id: "2",
    name: "Meran Xald",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

// export const {} = usersSlice.actions

export default usersSlice.reducer;
