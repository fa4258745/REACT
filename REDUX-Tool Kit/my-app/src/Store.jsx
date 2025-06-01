// import { configureStore } from "@reduxjs/toolkit";
// import  mycounterReducer  from "./counterSlice";

// const store = configureStore({
//   reducer: {
//     mycounter: mycounterReducer,
//   },
// });

// export default store;

//>>>>>>---------- COLOR STORE -----------<<<<<<<

// import { configureStore } from "@reduxjs/toolkit";
// import clrReducer from "./colorSlice"
// const store=configureStore({
//     reducer:{
//         mycolor:clrReducer
//     }
// })
// export default store

// <>// //>>>>>>---------- NAME STORE -----------<<<<<<<

// import { configureStore } from "@reduxjs/toolkit";
// import nameReducer from "./colorSlice"
// const store=configureStore({
//     reducer:{
//         myname:nameReducer
//     }
// })
// export default store

// store.js
// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./colorSlice";

// const store = configureStore({
//   reducer: {
//     cart: cartReducer
//   }
// });

// export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import colorReducer from "./colorSlice";
// const store = configureStore({

//  reducer:{
//     mycolor:colorReducer
//  }

// })

// export default store
// <------------------->
// import { configureStore } from "@reduxjs/toolkit";
// import colorReducer from "./colorSlice";
// const store = configureStore({
//   reducer: {
//     mydark: colorReducer,
//   },
// });

// export default store;

// <---------TODO STORE---------->

import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
const store=configureStore({
       reducer:{
         todo:todoReducer
       }
})
export default store;