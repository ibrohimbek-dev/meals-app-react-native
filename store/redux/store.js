import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorites";
import { logger } from "redux-logger";

export const store = configureStore({
	reducer: {
		favoriteMeals: favoritesReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
