import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  requirement: [],
  show: false,
};

const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    additem: (state, action) => {
      state.requirement.push(action.payload);
      state.show = true;
    },
    clearitem: (state) => {
      state.requirement = [];
      state.show = false;
    },
    deleteitem: (state, action) => {
      state.requirement = state.requirement.filter(
        (item) => item.id !== action.payload
      );
    },
    togglelist: (state) => {
      state.show = !state.show;
    },
    updatechecked: (state, action) => {
      const update = state.requirement.find(
        (item) => item.id == action.payload
      );

      if (update) {
        update.checked = !update.checked;
      }
    },
  },
});

export const { additem, clearitem, deleteitem, togglelist, updatechecked } =
  tripSlice.actions;

export default tripSlice.reducer;
