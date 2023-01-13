import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Unit } from "../../lib/types/unit";

export interface UnitState {
  unit: Unit;
}

const initialState: UnitState = {
  unit: Unit.CELSIUS,
};

export const unitSlice = createSlice({
  name: "unit",
  initialState,
  reducers: {
    changeUnit: (state, action: PayloadAction<Unit>) => {
      state.unit = action.payload;
    },
  },
});

export const { changeUnit } = unitSlice.actions;

export default unitSlice.reducer;
