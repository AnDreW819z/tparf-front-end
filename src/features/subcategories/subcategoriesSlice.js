import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const getSubcategories = createAsyncThunk(
  "subcategories/getSubcategories",
  async (_, thunkAPI) => {
    try {
      const res = await axios(`${BASE_URL}/subcategories`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const subcategoriesSlice = createSlice({
  name: "subcategories",
  initialState: {
    list: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getSubcategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSubcategories.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.isLoading = false;
    });
    builder.addCase(getSubcategories.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default subcategoriesSlice.reducer;
