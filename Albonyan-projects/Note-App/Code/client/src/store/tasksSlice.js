import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authFetch from "../utils/axios-setup";

const initialState = {
  isLoading: false,
  tasks: [],
  error: "",
};

export const createTask = createAsyncThunk(
  "tasks/createTask",
  async (createdTask) => {
    try {
      const { data } = await authFetch.post(`tasks`, createdTask);
      const { task } = data;
      return task;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

export const getAllTasks = createAsyncThunk("tasks/getAllTasks", async () => {
  try {
    const { data } = await authFetch.get(`tasks`);
    const { tasks } = data;
    return tasks;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
});

export const deleteTask = createAsyncThunk("tasks/deleteTask", async (id) => {
  try {
    await authFetch.delete(`tasks/${id}`);
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
});

export const deleteCompletedTasks = createAsyncThunk(
  "tasks/deleteCompletedTasks",
  async () => {
    try {
      const { data } = await authFetch.delete(`tasks`);
      const { deletedTaskIds } = data;
      return deletedTaskIds;
    } catch (error) {
      throw new Error(error.response.data.msg);
    }
  }
);

export const updateTask = createAsyncThunk("tasks/updateTask", async (id) => {
  try {
    const { data } = await authFetch.patch(`tasks/${id}`);
    const { updatedTaskId } = data;
    return updatedTaskId;
  } catch (error) {
    throw new Error(error.response.data.msg);
  }
});

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createTask.fulfilled, (state, action) => {
        const newTask = action.payload;
        state.tasks = [newTask, ...state.tasks];
      })
      .addCase(createTask.rejected, (state, action) => {
        state.error = action.error.message;
      })
      // GET ALL TASKS
      .addCase(getAllTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tasks = action.payload;
      })
      .addCase(getAllTasks.rejected, (state, action) => {
        state.error = action.error.message;
      })
      // DELETE TASK BY ID
      .addCase(deleteTask.rejected, (state, action) => {
        state.error = action.error.message;
      })
      // DELETE COMPLETED TASKS
      .addCase(deleteCompletedTasks.fulfilled, (state, action) => {
        const deletedTaskIds = action.payload;
        state.tasks = state.tasks.filter(
          (task) => !deletedTaskIds.includes(task._id)
        );
      })
      .addCase(deleteCompletedTasks.rejected, (state, action) => {
        state.error = action.error.message;
      })
      // UPDATE TASK BY ID
      .addCase(updateTask.fulfilled, (state, action) => {
        const updatedTaskId = action.payload;
        const updatedTaskIndex = state.tasks.findIndex(
          (task) => task._id === updatedTaskId
        );
        if (updatedTaskIndex !== -1) {
          const updatedTask = { ...state.tasks[updatedTaskIndex] };
          updatedTask.checked = !updatedTask.checked;
          state.tasks[updatedTaskIndex] = updatedTask;
        }
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default tasksSlice;
