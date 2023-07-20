import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import authFetch from "../utils/axios-setup";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");

const initialState = {
  isLoading: false,
  user: user ? JSON.parse(user) : null,
  token: token,
  error: "",
  updateUserSuccess: null,
};

const addUserToLocalStorage = ({ user, token }) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", JSON.stringify(token));
};

const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

export const setUpUser = createAsyncThunk(
  "auth/setUpUser",
  async ({ currentUser, endPoint }) => {
    try {
      const { data } = await axios.post(`api/v1/auth/${endPoint}`, currentUser);
      const { user, token } = data;
      addUserToLocalStorage({ user, token });
      return { user, token };
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async ({ currentUser }) => {
    try {
      const { data } = await authFetch.patch(
        `auth/updateUser`,
        currentUser
      );
      const { user, token } = data;
      addUserToLocalStorage({ user, token });
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

export const logoutUser = () => {
  removeUserFromLocalStorage();
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(setUpUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setUpUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = "";
      })
      .addCase(setUpUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // UPDATE USER STATUS
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state) => {
        state.isLoading = false;
        state.updateUserSuccess = true
        state.error = "";
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
})

export default authSlice;
