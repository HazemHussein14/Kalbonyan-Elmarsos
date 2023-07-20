import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formStage: 1,
  formSignUp: {
    email: "",
    password: "",
    confirmPassword: "",
  },
  formCompleteSignUp: {
    userName: "",
    phone: "",
    birthday: "",
  },
};

const registerFormSlice = createSlice({
  name: "registerForm",
  initialState,
  reducers: {
    updateFormStage(state, action) {
      state.formStage = action.payload;
    },
    updateFormSignUp(state, action) {
      state.formSignUp = action.payload;
    },
    updateFormCompleteSignUp(state, action) {
      state.formCompleteSignUp = action.payload;
    },
  },
});

export const { updateFormStage, updateFormSignUp, updateFormCompleteSignUp } =
  registerFormSlice.actions;

export default registerFormSlice;
