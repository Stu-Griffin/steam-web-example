import GamesReducer from "./games";
import AdditionalReducer from "./additional";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		games: GamesReducer,
		additional: AdditionalReducer,
	} 
});