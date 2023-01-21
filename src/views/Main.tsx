import Loader from "./Loader";
import { v4 as uuidv4 } from "uuid";
import { GameI } from "../types/game";
import { useNavigate } from "react-router-dom";
import PlayIcon from "../assets/icons/play.svg";
import LikeDislikeIcon from "./LikeDislikeIcon";
import { AdditionalI } from "../types/additional";
import { setChangeValue } from "../redux/additional";
import { useDispatch, useSelector } from "react-redux";
import React, { ReactElement, useEffect } from "react";
import { AppDispatch, RootState } from "../types/redux";

function Main(): ReactElement {
	const navigate = useNavigate();
	const dispatch: AppDispatch = useDispatch();
	const games: Array<GameI> = useSelector((state: RootState) => state.games);
	const {likedGames, loaderStatus}: AdditionalI = useSelector((state: RootState) => state.additional);

	useEffect(() => {
		const result: string|null = localStorage.getItem("Liked-games");
		(result) && dispatch(setChangeValue({key: "likedGames", value: JSON.parse(result)}));
	}, []);

	const playIcon = (appId: string|undefined): ReactElement|undefined => {
		return (likedGames.find((likedEl: GameI) => likedEl.appId === appId)) &&
			<div onClick={() => navigate({pathname: "/game", search: `?gameId=${appId}`})} className="gray-circle play-button">
				<img src={PlayIcon} alt="play icon"/>
			</div>;
	};

	const gameTitle = (title: string): ReactElement => {
		return (title.length > 25) ? <p>{title.slice(0, 25)}...</p> : <p>{title}</p>;
	};
	
	const gamePrice = (price: string): ReactElement => {
		if(price.trim() !== "" && (price.toLowerCase()).trim() !== "free to play"  && (price.toLowerCase()).trim() !== "free demo" && (price.toLowerCase()).trim() !== "free") {
			const el: Array<string> = price.trim().split("€").reverse();
			el.splice(0, 1).reverse();
			if(el.length === 1) {
				return (
					<p>{el[0]}€</p>
				);
			} else {
				return (
					<div className="game-card-price-box">
						<p className="game-card-previous-price">{el[1]}€</p>
						<p>{el[0]}€</p>
					</div>
				);
			}
		} else {
			return (
				<p>{price}</p>
			);
		}
	};

	return (
		<main>
			{
				(!loaderStatus) ?
					<Loader/>
					:
					games.map((el: GameI): ReactElement => {
						return (
							<div key={el.appId || uuidv4()} className="game-card">
								<img className="game-card-image" src={el.imgUrl} alt="game image"/>
								<div className="game-card-info">
									<div className="game-card-up">
										<div className="game-card-main-info">
											{gameTitle(el.title)}
											{playIcon(el.appId)}
										</div>
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