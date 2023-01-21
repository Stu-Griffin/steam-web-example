import { GameI } from "../types/game";
import { AppDispatch } from "../types/redux";
import { setChangeValue, changeLikedGames } from "./redux/additional";

export const getLikedGamesFromLocalStorage = (dispatch: AppDispatch): void => {
	const result: string | null = localStorage.getItem("Liked-games");
	result && dispatch(setChangeValue({ key: "likedGames", value: JSON.parse(result) }));
};

export const like = (dispatch: AppDispatch,el: GameI,likedGames: Array<GameI>): void => {
	dispatch(changeLikedGames({ type: "add", value: el }));
	localStorage.setItem("Liked-games", JSON.stringify([...likedGames, el]));
};

export const dislike = (dispatch: AppDispatch,el: GameI,likedGames: Array<GameI>): void => {
	dispatch(changeLikedGames({ type: "remove", value: el }));
	localStorage.setItem("Liked-games", JSON.stringify(likedGames.filter((game: GameI) => game.appId !== el.appId)));
};
