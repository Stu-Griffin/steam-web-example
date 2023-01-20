import { GameI } from "../types/game";
import { games } from "../models/games";
import { createSlice } from "@reduxjs/toolkit";

export const GamesSlice = createSlice({
	name: "games",
	initialState: games,
	reducers: {
		setGames: (state: Array<GameI>, action): Array<GameI> => {
			state = action.payload;
			return state;
		},
	},
});

export default GamesSlice.reducer;
export const { setGames } = GamesSlice.actions;