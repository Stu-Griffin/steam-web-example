import { GameI } from "../../types/game";
import React, { ReactElement } from "react";
import { AppDispatch } from "../../types/redux";
import PlayIcon from "../../assets/icons/play.svg";
import BlockIcon from "../../assets/icons/block.svg";
import LikeTrueIcon from "../../assets/icons/like-true.svg";
import LikeFalseIcon from "../../assets/icons/like-false.svg";
import { like, dislike } from "../../controllers/liked-games";

export const playIcon = (likedGames: Array<GameI>,appId: string | undefined,goToGamePage: () => void): ReactElement | undefined => {
	return (likedGames.find((likedEl: GameI) => likedEl.appId === appId) && (
		<div onClick={goToGamePage} className="gray-circle play-button">
			<img src={PlayIcon} alt="play icon" />
		</div>
	)
	);
};

export const gameTitle = (title: string): ReactElement => {
	return title.length > 25 ? <p>{title.slice(0, 25)}...</p> : <p>{title}</p>;
};

export const gamePrice = (price: string): ReactElement => {
	if (price.trim() !== "" && price.toLowerCase().trim() !== "free" && price.toLowerCase().trim() !== "free demo" && price.toLowerCase().trim() !== "free to play") {
		const el: Array<string> = price.trim().split("€").reverse();
		el.splice(0, 1).reverse();
		if (el.length === 1) {
			return <p>{el[0]}€</p>;
		} else {
			return (
				<div className="game-card-price-box">
					<p className="game-card-previous-price">{el[1]}€</p>
					<p>{el[0]}€</p>
				</div>
			);
		}
	} else {
		return <p>{price}</p>;
	}
};

export const likeDislikeIcon = (dispatch: AppDispatch, el: GameI, likedGames: Array<GameI>): ReactElement => {
	let icon: ReactElement = (<img src={LikeFalseIcon} alt="not like icon" onClick={() => like(dispatch, el, likedGames)}/>);
	if (el.appId) {
		if (likedGames.find((likedEl: GameI) => likedEl.appId === el.appId)) {
			icon = (<img alt="like icon" src={LikeTrueIcon} onClick={() => dislike(dispatch, el, likedGames)}/>);
		}
	} else {
		icon = <img src={BlockIcon} alt="block icon" />;
	}
	return icon;
};
