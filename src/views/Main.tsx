import Loader from "./Loader";
import { v4 as uuidv4 } from "uuid";
import { GameI } from "../types/game";
import { useNavigate } from "react-router-dom";
import { AdditionalI } from "../types/additional";
import { useDispatch, useSelector } from "react-redux";
import React, { ReactElement, useEffect } from "react";
import { AppDispatch, RootState } from "../types/redux";
import { getLikedGamesFromLocalStorage } from "../controllers/liked-games";
import { gameTitle, gamePrice, playIcon, likeDislikeIcon } from "./Additional-view-functions/Main";

export default function Main(): ReactElement {
	const navigate = useNavigate();
	const dispatch: AppDispatch = useDispatch();
	const games: Array<GameI> = useSelector((state: RootState) => state.games);
	const { likedGames, loaderStatus }: AdditionalI = useSelector((state: RootState) => state.additional);

	useEffect(() => {
		getLikedGamesFromLocalStorage(dispatch);
	}, []);

	return (
		<main>
			{(loaderStatus && Array.isArray(games)) ? (
				<Loader />
			) : (
				games.map((el: GameI): ReactElement => {
					return (
						<div 
							className="game-card"
							key={el.appId || uuidv4()} 
						>
							<img
								src={el.imgUrl}
								alt="game image"
								className="game-card-image"
							/>
							<div className="game-card-info">
								<div className="game-card-up">
									<div className="game-card-main-info">
										{gameTitle(el.title)}
										{playIcon((likedGames as Array<GameI>), el.appId, () => navigate({pathname: "/game", search: `?gameId=${el.appId}`}))}
									</div>
									<p>{el.released}</p>
								</div>
								<div className="game-card-down">
									{gamePrice(el.price)}
									{likeDislikeIcon(dispatch, el, (likedGames as Array<GameI>))}
								</div>
							</div>
						</div>
					);
				})
			)}
		</main>
	);
}