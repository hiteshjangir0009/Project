import { configureStore } from "@reduxjs/toolkit";

import rootreduser from "./rootreduser";

// const store = configureStore({
//     reducer:rootreduser
// })

// export default store;

import { createStore } from 'redux';


const store = createStore(rootreduser);

export default store;