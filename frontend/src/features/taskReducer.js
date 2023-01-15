import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "/api/tasks/";

const initialState = {
  tasks: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
};
//the task i pass in comes from Taskform. rejectWithValue pulled from thunkAPI
export const createTask = createAsyncThunk(
  "tasks/create",
  async (task, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, task);
      return response.data; //todo available in the data property form axios
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);
export const getTasks = createAsyncThunk(
  "tasks/getTasks",
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async (task, { rejectWithValue }) => {
    try {
      const { _id, title, body } = task;
      const response = await axios.patch(API_URL + _id, { title, body });
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(createTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.tasks.push(action.payload);
      })
      .addCase(createTask.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.tasks = action.payload;
      })
      .addCase(getTasks.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(updateTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.tasks = state.tasks.map((task) =>
          task._id === action.payload._id ? action.payload : task
        );
      })
      .addCase(updateTask.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
    //       .addCase(deleteTask.pending, (state) => {
    //         state.isLoading = true;
    //       })
    //       .addCase(deleteTask.fulfilled, (state, action) => {
    //         state.isLoading = false;
    //         state.isSuccess = true;
    //         state.tasks = state.tasks.filter(
    //           (task) => task._id !== action.payload.id
    //         );
    //       })
    // //       .addCase(deleteTask.rejected, (state, action) => {
    //         state.isLoading = false;
    //         state.isError = true;
    //       });
  },
});

export const { reset } = taskSlice.actions;
export default taskSlice.reducer;
