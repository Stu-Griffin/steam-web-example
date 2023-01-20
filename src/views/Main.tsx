import { v4 as uuidv4 } from "uuid";
import { GameI } from "../types/game";
import LikeDislikeIcon from "./LikeDislikeIcon";
import { AdditionalI } from "../types/additional";
import { setChangeValue } from "../redux/additional";
import { useDispatch, useSelector } from "react-redux";
import React, { ReactElement, useEffect } from "react";
import { AppDispatch, RootState } from "../types/redux";
import { gameTitle, gamePrice } from "../controllers/game-card";

function Main(): ReactElement {
	const dispatch: AppDispatch = useDispatch();
	const games: Array<GameI> = useSelector((state: RootState) => state.games);
	const {likedGames}: AdditionalI = useSelector((state: RootState) => state.additional);

	useEffect(() => {
		const result: string|null = localStorage.getItem("Liked-games");
		(result) && dispatch(setChangeValue({key: "likedGames", value: JSON.parse(result)}));
	}, []);

	useEffect(() => {
		localStorage.setItem("Liked-games", JSON.stringify(likedGames));
	}, [likedGames]);

	return (
		<main>
			{
				games.map((el: GameI): ReactElement => {
					return (
						<div key={el.appId || uuidv4()} className="game-card">
							<img className="game-card-image" src={el.imgUrl} alt="game image"/>
							<div className="game-card-info">
								<div className="game-card-up">
									{gameTitle(el.title)}
									<p>{el.released}</p>
								</div>
								<div className="game-card-down">
									{gamePrice(el.price)}
									<LikeDislikeIcon el={el} />
								</div>
							</div>
						</div>
					);
				})
			}
		</main>
	);
}

export default Main;