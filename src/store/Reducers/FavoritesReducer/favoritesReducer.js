import { createAction, createReducer } from "@reduxjs/toolkit";

const state = {
  favorites: [],
};

export const addToFavorites = createAction("ADD_TO_FAVORITES");

export default createReducer(state, {
  [addToFavorites]: (state, action) => {
    const film = state.favorites.some((el) => el.id === action.payload.id);
    if (film) {
      state.favorites = state.favorites.filter(
        (el) => el.id !== action.payload.id
      );
    } else {
      state.favorites.push(action.payload);
    }
  },
});
