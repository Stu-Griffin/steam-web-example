import "./style/main.css";
import "./style/media.css";
import "./style/scroll.css";
import "./style/loader.css";
import "./style/footer.css";
import "./style/header.css";
import "./style/reusable.css";
import "./style/game-page.css";
import "./style/modal-content.css";

import Main from "./views/Main";
import Footer from "./views/Footer";
import Header from "./views/Header";

import React, { ReactElement } from "react";

function App(): ReactElement {
	return (
		<>
			<Header/>
			<Main/>
			<Footer/>
		</>
	);
}

export default App;