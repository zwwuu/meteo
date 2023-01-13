import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { OpenWeatherMapService } from "../../services/open_weather_map";
import { Weather } from "../../lib/types/weather";
import { Coordinates } from "../../lib/types/coordinates";

export interface WeatherState {
  status: "idle" | "loading" | "error";
  weather: Weather | null;
  error: string | null;
}

const initialState: WeatherState = {
  weather: null,
  status: "idle",
  error: null,
};

export const getWeather = createAsyncThunk<Weather, Coordinates, { rejectValue: string }>(
  "weather/getWeather",
  async (coordinates: Coordinates, thunkApi) => {
    try {
      return await OpenWeatherMapService.getCurrentWeather(coordinates);
    } catch (error: any) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const weather = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWeather.fulfilled, (state, action) => {
      state.status = "idle";
      state.weather = action.payload;
    });

    builder.addCase(getWeather.rejected, (state, action) => {
      state.status = "error";
      state.weather = null;
      state.error = action.payload ?? "Something went wrong";
    });

    builder.addCase(getWeather.pending, (state) => {
      state.status = "loading";
      state.weather = null;
    });
  },
});

export default weather.reducer;
