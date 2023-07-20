import { configureStore } from "@reduxjs/toolkit";
import registerFormSlice from "./registerSlice";
import authSlice from "./authSlice";
import tasksSlice from "./tasksSlice";

const store = configureStore({
  reducer: {
    registerForm: registerFormSlice.reducer,
    authSlice: authSlice.reducer,
    tasksSlice: tasksSlice.reducer,
  },
});

export default store;
