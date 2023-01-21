import { GameI } from "../types/game";
import { SortValueI } from "../types/sort";
import React, { ReactElement } from "react";
import { sortGames } from "../controllers/games";
import { sortValues, sortTypes } from "../models/sort";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../types/redux";
import { setChangeValue } from "../controllers/redux/additional";

interface PropsI {
  onClose: () => void;
}

export default function ModalContent({ onClose }: PropsI): ReactElement {
	const dispatch: AppDispatch = useDispatch();
	const games: Array<GameI> = useSelector((state: RootState) => state.games);
	const { sortType, sortValue } = useSelector(
		(state: RootState) => state.additional
	);

	const actionButton = (): void => {
		onClose();
		sortGames(dispatch, (sortValue as string), (sortType as string), games);
	};

	const chosenElStyle = (value: string, chosenValue: string): object => {
		return value === chosenValue
			? {
				paddingTop: "0.25rem",
				paddingBottom: "0.25rem",
				borderTop: "2px solid black",
				borderBottom: "2px solid black",
			}
			: {};
	};

	return (
		<div className="modal">
			<div className="modal-el-box">
				<p className="title">Sort value:</p>
				<div className="modal-box">
					{sortValues.map((el: SortValueI, id: number): ReactElement => {
						return (
							<div
								key={id}
								className="sort-value-box"
								style={chosenElStyle(el.value, (sortValue as string))}
								onClick={() => dispatch(setChangeValue({ key: "sortValue", value: el.value }))}
							>
								<p>{el.value}</p>
								<img src={el.icon} alt={el.value} />
							</div>
						);
					})}
				</div>
			</div>
			<div className="modal-el-box">
				<p className="title">Sort type:</p>
				<div className="modal-box">
					{sortTypes.map((el: string, id: number): ReactElement => {
						return (
							<p
								key={id}
								className="sort-value"
								style={chosenElStyle(el, (sortType as string))}
								onClick={() => dispatch(setChangeValue({ key: "sortType", value: el }))}
							>
								{el}
							</p>
						);
					})}
				</div>
			</div>
			<button onClick={actionButton} className="button sort-button">Sort games list</button>
		</div>
	);
}