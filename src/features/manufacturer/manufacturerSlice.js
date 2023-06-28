import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const getManufacturer = createAsyncThunk(
  "manufacturer/getManufacturer",
  async (_, thunkAPI) => {
    try {
      const res = await axios(`${BASE_URL}/Manufacturer`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const manufacturerSlice = createSlice({
  name: "manufacturer",
  initialState: {
    list: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getManufacturer.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getManufacturer.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.isLoading = false;
    });
    builder.addCase(getManufacturer.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default manufacturerSlice.reducer;
