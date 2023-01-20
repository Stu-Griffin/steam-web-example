import gameAPI from "./API/game";
import { setGames } from "../redux/games";
import { AppDispatch } from "../types/redux";

export const getGames = async (dispatch: AppDispatch, page: number, input: string): Promise<void> => {
	try {
		const response = await gameAPI.getGames(input, page);
		dispatch(setGames(response));
	} catch(error) {
		console.log(error);
	}
};