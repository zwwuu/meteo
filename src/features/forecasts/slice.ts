import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { OpenWeatherMapService } from "../../services/open_weather_map";
import { Forecast } from "../../lib/types/forecast";
import { Coordinates } from "../../lib/types/coordinates";

export interface ForecastState {
  status: "idle" | "loading" | "error";
  forecasts: Forecast[] | null;
  error: string | null;
}

const initialState: ForecastState = {
  status: "idle",
  forecasts: null,
  error: null,
};

export const getForecasts = createAsyncThunk<Forecast[], Coordinates, { rejectValue: string }>(
  "forecasts/getForecast",
  async (coordinates: Coordinates, thunkApi) => {
    try {
      return await OpenWeatherMapService.getForecasts(coordinates);
    } catch (error: any) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const forecastsSlice = createSlice({
  name: "forecasts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getForecasts.fulfilled, (state, action) => {
      state.status = "idle";
      state.forecasts = action.payload;
    });

    builder.addCase(getForecasts.rejected, (state, action) => {
      state.status = "error";
      state.forecasts = null;
      state.error = action.payload ?? "Something went wrong";
    });

    builder.addCase(getForecasts.pending, (state) => {
      state.status = "loading";
      state.forecasts = null;
    });
  },
});

export default forecastsSlice.reducer;
