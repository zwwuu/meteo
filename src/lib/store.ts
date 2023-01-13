import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../features/weather/slice";
import forecastReducer from "../features/forecasts/slice";
import unitReducer from "../features/unit/slice";

export const store = configureStore({
  reducer: {
    forecasts: forecastReducer,
    weather: weatherReducer,
    unit: unitReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
