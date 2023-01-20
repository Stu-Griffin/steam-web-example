import "./style/main.css";
import "./style/modal.css";
import "./style/media.css";
import "./style/header.css";
import "./style/footer.css";
import "./style/reusable.css";
import Main from "./views/Main";
import Footer from "./views/Footer";
import Header from "./views/Header";
import { setGames } from "./redux/games";
import gameAPI from "./controllers/API/game";
import { AdditionalI } from "./types/additional";
import { AppDispatch, RootState } from "./types/redux";
import { useDispatch, useSelector } from "react-redux";
import React, { ReactElement, useEffect } from "react";

function App(): ReactElement {
	const dispatch: AppDispatch = useDispatch();
	const {page}: AdditionalI = useSelector((state: RootState) => state.additional);

	useEffect(() => {
		// getGames(page);
	}, [page]);

	const getGames = async (page: number): Promise<void> => {
		try {
			const response = await gameAPI.getGames("Counter", page);
			dispatch(setGames(response));
		} catch(error) {
			console.log(error);
		}
	};

	return (
		<>
			<Header/>
			<Main/>
			<Footer/>
		</>
	);
}

export default App;
