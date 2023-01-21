import { GameI } from "../types/game";
import { SortValueI } from "../types/sort";
import React, { ReactElement } from "react";
import { setChangeValue } from "../redux/additional";
import { sortValues, sortTypes } from "../models/sort";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../types/redux";
import { sortGamesListByPrice, sortGamesListByDate } from "../redux/games";

interface PropsI {
	onClose: () => void;
}

function ModalContent({onClose}: PropsI): ReactElement {
	const dispatch: AppDispatch = useDispatch();
	const games: Array<GameI> = useSelector((state: RootState) => state.games);
	const {sortType, sortValue} = useSelector((state: RootState) => state.additional);

	const actionButton = (): void => {
		onClose();
		dispatch(setChangeValue({key: "loaderStatus", value: true}));
		switch(sortValue) {
		case "Price":
			dispatch(sortGamesListByPrice({data: games, sortValue: sortType}));
			break;
		case "Publish Date":
			dispatch(sortGamesListByDate({data: games, sortValue: sortType}));
			break;
		default:
			alert("Something went wrong with sorting function");
			break;
		}
		dispatch(setChangeValue({key: "loaderStatus", value: false}));
	};

	const chosenElStyle = (value: string, chosenValue: string): object => {
		return (value === chosenValue) ? {
			paddingTop: "0.25rem",
			paddingBottom: "0.25rem",
			borderTop: "2px solid black",
			borderBottom: "2px solid black",
		} : {};
	};

	return (
		<div className="modal">
			<div className="modal-box">
				<p className="title">Sort value:</p>
				<div className="box">
					{
						sortValues.map((el: SortValueI, id: number): ReactElement => {
							return (
								<div onClick={() => dispatch(setChangeValue({key: "sortValue", value: el.value}))} style={chosenElStyle(el.value, sortValue)} className="sort-value-box" key={id}>
									<p>{el.value}</p>
									<img src={el.icon} alt={el.value}/>
								</div>
							);
						})
					}
				</div>
			</div>
			<div className="modal-box">
				<p className="title">Sort type:</p>
				<div className="box">
					{
						sortTypes.map((el: string, id: number): ReactElement => {
							return (
								<p onClick={() => dispatch(setChangeValue({key: "sortType", value: el}))} style={chosenElStyle(el, sortType)} className="sort-value" key={id}>{el}</p>
							);
						})
					}
				</div>
			</div>
			<button onClick={actionButton} className="header-button sort-button">Sort games list</button>
		</div>
	);
}

export default ModalContent;