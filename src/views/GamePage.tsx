import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../types/redux";
import { getGame } from "../controllers/games";
import { setChangeValue } from "../redux/additional";
import React, { ReactElement, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

interface DeveloperPublisherI {
	link: string;
	name: string;
}

interface TagI {
	url: string;
	name: string;
}

interface GameInfoI {
	title: string;
	imgUrl: string;
	released: string;
	tags: Array<TagI>;
	description: string;
	developer: DeveloperPublisherI;
	publisher: DeveloperPublisherI;
}

function GamePage(): ReactElement {
	const [searchParams] = useSearchParams();
	const dispatch: AppDispatch = useDispatch();
	const {loaderStatus, gameInfo} = useSelector((state: RootState) => state.additional);

	// useEffect(() => {
	// 	getGameInfo();
	// }, []);

	const getGameInfo = async (): Promise<void> => {
		dispatch(setChangeValue({key: "loaderStatus", value: true}));
		await getGame(dispatch, +(searchParams.get("gameId") as string));
		dispatch(setChangeValue({key: "loaderStatus", value: false}));
	};

	return (
		(loaderStatus) ?
			<Loader/>
			:
			<div className="game-page">
				<h2 className="game-page-title">{gameInfo?.title}</h2>
				<img className="game-page-image" src={gameInfo?.imgUrl}/>
				<div className="game-page-info-area game-box">
					<p className="game-description">{gameInfo?.description}</p>
					<div className="game-info-box">
						<p>Released date:</p>
						<p className="game-info-box-value">{gameInfo?.released}</p>
					</div>
					<div className="game-box">
						<div className="game-info-box">
							<p>Developer:</p>
							<a className="game-info-box-value" href={gameInfo?.developer.link}>{gameInfo?.developer.name}</a>
						</div>
						<div className="game-info-box">
							<p>Publisher:</p>
							<a className="game-info-box-value" href={gameInfo?.publisher.link}>{gameInfo?.publisher.name}</a>
						</div>
					</div>
					<div className="tag-area">
						<p>Popular tags:</p>
						<div className="tag-box">
							{
								gameInfo?.tags.map((tag: TagI, id: number) => {
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