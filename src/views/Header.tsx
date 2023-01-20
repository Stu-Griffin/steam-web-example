import Modal from "react-modal";
import { setGames } from "../redux/games";
import ModalContent from "./ModalContent";
import DateIcon from "../assets/icons/date.svg";
import LogoIcon from "../assets/icons/logo.svg";
import { AdditionalI } from "../types/additional";
import PriceIcon from "../assets/icons/price.svg";
import { setChangeValue } from "../redux/additional";
import SettingIcon from "../assets/icons/setting.svg";
import React, { ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../types/redux";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		width: "300px",
		bottom: "auto",
		height: "5rem",
		fontSize: "14px",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

const sortTypes: Array<string> = ["Lower to bigger", "Bigger to lower"];

const sortValues: any = [
	{
		value: "Price",
		icon: PriceIcon,
	},
	{
		icon: DateIcon,
		value: "Publish Date",
	},
];

function Header(): ReactElement {
	const dispatch: AppDispatch = useDispatch();
	const [sortState, setSortState] = useState<any>({
		type: sortTypes[0],
		value: sortValues[0].value,
	});
	const [modalWindow, setModalWindow] = useState<boolean>(false);
	const [likedListShow, setLikedListShow] = useState<boolean>(false);
	const {likedGames}: AdditionalI = useSelector((state: RootState) => state.additional);

	const likeListButton = (): void => {
		if(!likedListShow) {
			dispatch(setGames(likedGames));
		} else {
			dispatch(setChangeValue({key: "page", value: 1}));
		}
		setLikedListShow((state: boolean) => !state);
	};

	const chooseSort = (key: string, value: string): void => {
		setSortState({...sortState, [key]: value});
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
		<header>
			<img 
				src={LogoIcon} 
				alt="steam logo"
				className="steam-logo"
			/>
			<input 
				className="header-search-input" 
				placeholder="Enter an app name..."
			/>
			<div className="header-buttons-area">
				<button 
					className="header-sorting-button"
					onClick={() => setModalWindow(true)}
				>
					<img 
						src={SettingIcon} 
						alt="list sorting button"
					/>
				</button>
				<Modal
					ariaHideApp={false}
					isOpen={modalWindow}
					style={customStyles}
					contentLabel="Sorting Modal"
					onRequestClose={() => setModalWindow(false)}
				>
					<ModalContent/>
				</Modal>
				<div className="header-buttons-box">
					<button className="header-button header-button-left">Search</button>
					<button onClick={likeListButton} style={(likedListShow) ? {backgroundColor: "#2c2c2c"} : {backgroundColor: "#837F7F"}} className="header-button header-button-right">Like list</button>
				</div>
			</div>
		</header>
	);
}

export default Header;