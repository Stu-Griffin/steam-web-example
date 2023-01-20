import { GameI } from "../types/game";
import React, { ReactElement } from "react";
import BlockIcon from "../assets/icons/block.svg";
import { AdditionalI } from "../types/additional";
import { useDispatch, useSelector } from "react-redux";
import { changeLikedGames } from "../redux/additional";
import { AppDispatch, RootState } from "../types/redux";
import LikeTrueIcon from "../assets/icons/like-true.svg";
import LikeFalseIcon from "../assets/icons/like-false.svg";

interface PropsI {
	el: GameI;
}

function LikeDislikeIcon({el}: PropsI): ReactElement {
	const dispatch: AppDispatch = useDispatch();
	const {likedGames}: AdditionalI = useSelector((state: RootState) => state.additional);
	let icon: ReactElement = <img onClick={() => like(el)} src={LikeFalseIcon} alt="not like icon"/>;

	const like = (el: GameI): void => {
		dispatch(changeLikedGames({type: "add", value: el}));
	};

	const getIcon = (): ReactElement => {
		if(el.appId) {
			if((likedGames.find((likedEl: GameI) => likedEl.appId === el.appId))) {
				icon = <img onClick={() => dislike(el)} src={LikeTrueIcon} alt="like icon"/>;
			}
		} else {
			icon = <img src={BlockIcon} alt="block icon"/>;
		}
		return icon;
	};

	const dislike = (el: GameI): void => {
		dispatch(changeLikedGames({type: "remove", value: el}));
	};

	return getIcon();
}

export default LikeDislikeIcon;