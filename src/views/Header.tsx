import Modal from "react-modal";
import ModalContent from "./ModalContent";
import LogoIcon from "../assets/icons/logo.svg";
import { AdditionalI } from "../types/additional";
import { searchGames } from "../controllers/games";
import SettingIcon from "../assets/icons/setting.svg";
import { setGames } from "../controllers/redux/games";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../types/redux";
import React, { ReactElement, useState, useEffect } from "react";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		width: "300px",
		bottom: "auto",
		height: "8rem",
		fontSize: "14px",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

export default  function Header(): ReactElement {
	const dispatch: AppDispatch = useDispatch();
	const [inputValue, setInputValue] = useState<string>("");
	const [modalWindow, setModalWindow] = useState<boolean>(false);
	const [likedListShow, setLikedListShow] = useState<boolean>(false);
	const {likedGames, page}: AdditionalI = useSelector((state: RootState) => state.additional);

	useEffect(() => {
		searchGames(dispatch, (page as number), inputValue);
	}, [page]);

	const likeListButton = (): void => {
		(!likedListShow) ? dispatch(setGames(likedGames)) : searchGames(dispatch, (page as number), inputValue);
		setLikedListShow((state: boolean) => !state);
	};

	const backgroundColorLikelistButton = (): object => {
		return (likedListShow) ? {backgroundColor: "#2c2c2c"} : {backgroundColor: "#837F7F"};
	};

	return (
		<header>
			<img src={LogoIcon} alt="steam logo" className="steam-logo"/>
			<input value={inputValue} className="header-search-input" placeholder="Enter an app name..." onChange={(e) => setInputValue(e.target.value)}/>
			<div className="header-buttons-area">
				<button className="header-sorting-button" onClick={() => setModalWindow(true)}>
					<img src={SettingIcon} alt="list sorting button"/>
				</button>
				<Modal ariaHideApp={false} isOpen={modalWindow} style={customStyles} contentLabel="Sorting Modal" onRequestClose={() => setModalWindow(false)}>
					<ModalContent onClose={() => setModalWindow(false)}/>
				</Modal>
				<div className="header-buttons-list-box">
					<button onClick={() => searchGames(dispatch, (page as number), inputValue)} className="button header-button-list-left">Search</button>
					<button onClick={likeListButton} className="button header-button-list-right" style={backgroundColorLikelistButton()}>Like list</button>
				</div>
			</div>
		</header>
	);
}