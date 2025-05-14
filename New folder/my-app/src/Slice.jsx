// import { createSlice } from "@reduxjs/toolkit";
// const nameSlice = createSlice({
//   name: "myname",
//   initialState: {
//     user: "Faraz",
//   },
//   reducers: {
//     changeName: (state) => {
//       state.user = "Ahmed||||||";
//     },
//   },
// });

// export const {changeName}= nameSlice.actions
// export default nameSlice.reducer



import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "usrinput",
  initialState: {
    count: 5,
  },
  reducers: {
    incrementBy: (state, action) => {
      state.count += action.payload;
    }
  },
});
export const { incrementBy } = inputSlice.actions;
export const { decrementBy} = inputSlice.actions;
export default inputSlice.reducer;
