import Loader from "./Loader";
import { GameCardI, TagI } from "../types/game";
import { AdditionalI } from "../types/additional";
import { useSearchParams } from "react-router-dom";
import { searchGameInfo } from "../controllers/games";
import React, { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../types/redux";

function GamePage(): ReactElement {
	const [searchParams] = useSearchParams();
	const dispatch: AppDispatch = useDispatch();
	const {loaderStatus, gameInfo}:AdditionalI = useSelector((state: RootState) => state.additional);

	useEffect(() => {
		searchGameInfo(dispatch, +(searchParams.get("gameId") as string));
	}, []);

	return (
		(loaderStatus) ?
			<Loader/>
			:
			<div className="game-page">
				<h2 className="game-page-title">{(gameInfo as GameCardI)?.title}</h2>
				<img className="game-page-image" src={(gameInfo as GameCardI)?.imgUrl}/>
				<div className="game-page-info-area game-box">
					<p className="game-description">{(gameInfo as GameCardI)?.description}</p>
					<div className="game-info-box">
						<p>Released date:</p>
						<p className="game-info-box-value">{(gameInfo as GameCardI)?.released}</p>
					</div>
					<div className="game-box">
						<div className="game-info-box">
							<p>Developer:</p>
							<a className="game-info-box-value" href={(gameInfo as GameCardI)?.developer.link}>{(gameInfo as GameCardI).developer.name}</a>
						</div>
						<div className="game-info-box">
							<p>Publisher:</p>
							<a className="game-info-box-value" href={(gameInfo as GameCardI)?.publisher.link}>{(gameInfo as GameCardI).publisher.name}</a>
						</div>
					</div>
					<div className="tag-area">
						<p>Popular tags:</p>
						<div className="tag-box">
							{
								(gameInfo as GameCardI)?.tags.map((tag: TagI, id: number) => {
									return (
										<a className="tag" key={id} href={tag.url}>{tag.name}</a>
									);
								})
							}
						</div>
					</div>
				</div>
			</div>
	);
}

export default GamePage;