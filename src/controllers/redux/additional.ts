import { GameI } from "../../types/game";
import { createSlice } from "@reduxjs/toolkit";
import { AdditionalI } from "../../types/additional";
import { additional } from "../../models/additional";

export const AdditionalSlice = createSlice({
	name: "additional",
	initialState: additional,
	reducers: {
		setChangeValue: (state: AdditionalI, action): AdditionalI => {
			state[action.payload.key] = action.payload.value;
			return state;
		},
		changeLikedGames: (state: AdditionalI, action): AdditionalI => {
			switch (action.payload.type) {
			case "add":
				(state.likedGames as Array<GameI>).push(action.payload.value);
				break;
			case "remove":
				state.likedGames = (state.likedGames as Array<GameI>).filter((el: GameI) => el.appId !== action.payload.value.appId);
				break;
			default:
				return state;
			}
			return state;
		},
	},
});

export default AdditionalSlice.reducer;
export const { setChangeValue, changeLikedGames } = AdditionalSlice.actions;
