// import { configureStore } from "@reduxjs/toolkit";
// import nameReducer from "./Slice";

// const store = configureStore({
//   reducer: {
//     myname: nameReducer,
//   },
// });

// export default store;



import { configureStore } from "@reduxjs/toolkit";
import rdcr from "./Slice"
const store=configureStore({
reducer:{
    usrinput:rdcr
}
})
export default store