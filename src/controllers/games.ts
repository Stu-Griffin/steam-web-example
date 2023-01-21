import gameAPI from "./API/games";
import { GameI } from "../types/game";
import { AppDispatch } from "../types/redux";
import { setChangeValue } from "./redux/additional";
import { setGames, sortGamesListByPrice, sortGamesListByDate } from "./redux/games";

export const getGame = async (dispatch: AppDispatch, id: number): Promise<void> => {
	try {
		const response = await gameAPI.getGame(id);
		dispatch(setChangeValue({ key: "gameInfo", value: response }));
	} catch (error) {
		console.log(error);
	}
};

export const searchGameInfo = async (dispatch: AppDispatch, gameId: number): Promise<void> => {
	dispatch(setChangeValue({key: "loaderStatus", value: true}));
	await getGame(dispatch, gameId);
	dispatch(setChangeValue({key: "loaderStatus", value: false}));
};

export const getGames = async (dispatch: AppDispatch, page: number, input: string): Promise<void> => {
	try {
		const response = await gameAPI.getGames(input, page);
		dispatch(setGames(response));
	} catch (error) {
		console.log(error);
	}
};

export const searchGames = async (dispatch: AppDispatch, page: number, inputValue: string): Promise<void> => {
	dispatch(setChangeValue({ key: "loaderStatus", value: true }));
	await getGames(dispatch, page, inputValue);
	dispatch(setChangeValue({ key: "loaderStatus", value: false }));
};

export const sortGames = (dispatch: AppDispatch, sortValue: string, sortType: string, games: Array<GameI>): void => {
	dispatch(setChangeValue({ key: "loaderStatus", value: true }));
	switch (sortValue) {
	case "Price":
		dispatch(sortGamesListByPrice({ data: games, sortValue: sortType }));
		break;
	case "Publish Date":
		dispatch(sortGamesListByDate({ data: games, sortValue: sortType }));
		break;
	default:
		alert("Something went wrong with sorting function");
		break;
	}
	dispatch(setChangeValue({ key: "loaderStatus", value: false }));
};