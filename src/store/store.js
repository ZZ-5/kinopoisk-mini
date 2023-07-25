import { combineReducers, configureStore, legacy_createStore } from "@reduxjs/toolkit";
import favoritesReducer from "./Reducers/FavoritesReducer/favoritesReducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

const persistedReducers = persistReducer(persistConfig, rootReducer)

// export const store = configureStore({
//   reducer: rootReducer,
// });

export const store = legacy_createStore(persistedReducers)
export const persistor = persistStore(store)
