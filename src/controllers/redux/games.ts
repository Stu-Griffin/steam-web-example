import { GameI } from "../../types/game";
import { games } from "../../models/games";
import { createSlice } from "@reduxjs/toolkit";

interface arrRes {
	arrForSorting: Array<GameI>;
	arrNotForSorting: Array<GameI>;
}

export const GamesSlice = createSlice({
	name: "games",
	initialState: games,
	reducers: {
		setGames: (state: Array<GameI>, action): Array<GameI> => {
			state = action.payload;
			return state;
		},
		sortGamesListByDate: (state: Array<GameI>, action): Array<GameI> => {
			const arr = action.payload.data.reduce((res: arrRes, el: GameI): arrRes => {
				(el.released.trim() !== "" && (el.released.toLowerCase()).trim() !== "coming soon") ? res.arrForSorting.push(el) : res.arrNotForSorting.push(el);
				return res;
			}, {
				arrForSorting: [],
				arrNotForSorting: [],
			});
			switch(action.payload.sortValue) {
			case "Lower to bigger":
				state = ([...arr.arrNotForSorting, ...arr.arrForSorting.sort((a: GameI, b: GameI) => (new Date(a.released) as any) - (new Date(b.released) as any))]);
				break;
			case "Bigger to lower":
				state = ([...arr.arrNotForSorting, ...arr.arrForSorting.sort((a: GameI, b: GameI) => (new Date(b.released) as any) - (new Date(a.released) as any))]);
				break;
			default:
				alert("Something went wrong with sorting by date");
			}
			return state;
		},
		sortGamesListByPrice: (state: Array<GameI>, action): Array<GameI> => {
			const arr = action.payload.data.reduce((res: arrRes, el: GameI): arrRes => {
				(el.price.trim() !== "" && (el.price.toLowerCase()).trim() !== "free to play"  && (el.price.toLowerCase()).trim() !== "free demo" && (el.price.toLowerCase()).trim() !== "free") ? res.arrForSorting.push(el) : res.arrNotForSorting.push(el);
				return res;
			}, {
				arrForSorting: [],
				arrNotForSorting: [],
			});
			switch(action.payload.sortValue) {
			case "Lower to bigger":
				state = ([...arr.arrNotForSorting, ...arr.arrForSorting.sort((a: GameI, b: GameI) => {
					const arr = {
						aPrice: a.price.trim().split("€").reverse(),
						bPrice: b.price.trim().split("€").reverse(),
					};
	
					arr.aPrice.splice(0,1);
					arr.bPrice.splice(0,1);

					const aPrice: number = +(arr.aPrice[0].split(",").join("."));
					const bPrice: number = +(arr.bPrice[0].split(",").join("."));

					return +aPrice - +bPrice;
				})]);
				break;
			case "Bigger to lower":
				state = ([...arr.arrForSorting.sort((a: GameI, b: GameI) => {
					const arr = {
						aPrice: a.price.trim().split("€").reverse(),
						bPrice: b.price.trim().split("€").reverse(),
					};
						
					arr.aPrice.splice(0,1);
					arr.bPrice.splice(0,1);
	
					const aPrice: number = +(arr.aPrice[0].split(",").join("."));
					const bPrice: number = +(arr.bPrice[0].split(",").join("."));
					
					return +bPrice - +aPrice;
				}), ...arr.arrNotForSorting]);
				break;
			default:
				alert("Something went wrong with sorting by price");
			}
			return state;
		},
	},
});

export default GamesSlice.reducer;
export const { setGames, sortGamesListByDate, sortGamesListByPrice } = GamesSlice.actions;