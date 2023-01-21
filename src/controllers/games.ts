import gameAPI from "./API/game";
import { setGames } from "../redux/games";
import { AppDispatch } from "../types/redux";
import { setChangeValue } from "../redux/additional";

export const getGame = async (dispatch: AppDispatch, id: number): Promise<void> => {
	try {
		const response = await gameAPI.getGame(id);
		dispatch(setChangeValue({key: "gameInfo", value: response}));
	} catch(error: any) {
		console.log(error.response);
	}
};

export const getGames = async (dispatch: AppDispatch, page: number, input: string): Promise<void> => {
	try {
		const response = await gameAPI.getGames(input, page);
		dispatch(setGames(response));
	} catch(error: any) {
		console.log(error.response);
	}
};