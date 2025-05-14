import { createSlice } from "@reduxjs/toolkit";
const colorSlice = createSlice({
  name: "mycolor",
  initialState: {
    color: "yellow",
  },
  reducers: {
    changeColor: (state) => {
      state.color = "red";
    },
  },
});
export const { changeColor } = colorSlice.actions;
export default colorSlice.reducer;

// //>>>>>>---------- NAME CHANGE STORE -----------<<<<<<<

// import { createSlice } from "@reduxjs/toolkit";
// const nameSlice = createSlice({
//     name: "myname",
//     initialState: {
//         user: "Ananya"
//     },
//     reducers: {
//         changeName: (state) => {
//             state.user = "Anandi!!!!"
//         }
//     }
// })
// export const { changeName } = nameSlice.actions
// export default nameSlice.reducer

// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     items: [],
//     total: 0,
//   },
//   reducers: {
//     addItem: (state, action) => {
//       state.items.push(action.payload);
//       state.total += action.payload.price;
//     },
//     removeItem: (state, action) => {
//       const index = state.items.findIndex(item => item.id === action.payload);
//       if (index !== -1) {
//         state.total -= state.items[index].price;
//         state.items.splice(index, 1);
//       }
//     },
//     clearCart: (state) => {
//       state.items = [];
//       state.total = 0;
//     }
//   }
// });

// export const { addItem, removeItem, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";
// const colorSlice = createSlice({
//   name: "mycolor",
//   initialState: {
//     work: [],
//   },
//   reducers: {
//     changeColor: (state, actions) => {
//       console.log(actions.payload);
//       state.work.push(actions.payload);
//     },
//   },
// });

// export const { changeColor } = colorSlice.actions;
// export default colorSlice.reducer;