import React from "react";
import "./style/main.css";
import "./style/media.css";
import "./style/header.css";
import "./style/footer.css";
import "./style/reusable.css";
import LogoIcon from "./assets/icons/logo.svg";
import SettingIcon from "./assets/icons/setting.svg";
import LikeTrueIcon from "./assets/icons/like-true.svg";
import LikeFalseIcon from "./assets/icons/like-false.svg";
import LeftArrowIcon from "./assets/icons/arrow-left.svg";
import RightArrowIcon from "./assets/icons/arrow-right.svg";

function App() {
	return (
		<>
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
					<button className="header-sorting-button">
						<img 
							src={SettingIcon} 
							alt="list sorting button"
						/>
					</button>
					<div className="header-buttons-box">
						<button className="header-button header-button-left">Search</button>
						<button className="header-button header-button-right">Like list</button>
					</div>
				</div>
			</header>
			<main>
				<div className="game-card">
					<img className="game-card-image" src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_sm_120.jpg?t=1668125812" alt="game image"/>
					<div className="game-card-info">
						<div className="game-card-up">
							<p>Counter-Strike: Global Offensive</p>
							<p>21 Aug, 2012</p>
						</div>
						<div className="game-card-down">
							<p>8,19€</p>
							<img src={LikeFalseIcon} alt="not like icon"/>
						</div>
					</div>
				</div>
				<div className="game-card">
					<img className="game-card-image" src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_sm_120.jpg?t=1668125812" alt="game image"/>
					<div className="game-card-info">
						<div className="game-card-up">
							<p>Counter-Strike: Global Offensive</p>
							<p>21 Aug, 2012</p>
						</div>
						<div className="game-card-down">
							<p>8,19€</p>
							<img src={LikeFalseIcon} alt="not like icon"/>
						</div>
					</div>
				</div>
				<div className="game-card">
					<img className="game-card-image" src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_sm_120.jpg?t=1668125812" alt="game image"/>
					<div className="game-card-info">
						<div className="game-card-up">
							<p>Counter-Strike: Global Offensive</p>
							<p>21 Aug, 2012</p>
						</div>
						<div className="game-card-down">
							<p>8,19€</p>
							<img src={LikeFalseIcon} alt="not like icon"/>
						</div>
					</div>
				</div>
				<div className="game-card">
					<img className="game-card-image" src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_sm_120.jpg?t=1668125812" alt="game image"/>
					<div className="game-card-info">
						<div className="game-card-up">
							<p>Counter-Strike: Global Offensive</p>
							<p>21 Aug, 2012</p>
						</div>
						<div className="game-card-down">
							<p>8,19€</p>
							<img src={LikeFalseIcon} alt="not like icon"/>
						</div>
					</div>
				</div>
				<div className="game-card">
					<img className="game-card-image" src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_sm_120.jpg?t=1668125812" alt="game image"/>
					<div className="game-card-info">
						<div className="game-card-up">
							<p>Counter-Strike: Global Offensive</p>
							<p>21 Aug, 2012</p>
						</div>
						<div className="game-card-down">
							<p>8,19€</p>
							<img src={LikeFalseIcon} alt="not like icon"/>
						</div>
					</div>
				</div>
				<div className="game-card">
					<img className="game-card-image" src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_sm_120.jpg?t=1668125812" alt="game image"/>
					<div className="game-card-info">
						<div className="game-card-up">
							<p>Counter-Strike: Global Offensive</p>
							<p>21 Aug, 2012</p>
						</div>
						<div className="game-card-down">
							<p>8,19€</p>
							<img src={LikeFalseIcon} alt="not like icon"/>
						</div>
					</div>
				</div>
				<div className="game-card">
					<img className="game-card-image" src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_sm_120.jpg?t=1668125812" alt="game image"/>
					<div className="game-card-info">
						<div className="game-card-up">
							<p>Counter-Strike: Global Offensive</p>
							<p>21 Aug, 2012</p>
						</div>
						<div className="game-card-down">
							<p>8,19€</p>
							<img src={LikeFalseIcon} alt="not like icon"/>
						</div>
					</div>
				</div>
				<div className="game-card">
					<img className="game-card-image" src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_sm_120.jpg?t=1668125812" alt="game image"/>
					<div className="game-card-info">
						<div className="game-card-up">
							<p>Counter-Strike: Global Offensive</p>
							<p>21 Aug, 2012</p>
						</div>
						<div className="game-card-down">
							<p>8,19€</p>
							<img src={LikeFalseIcon} alt="not like icon"/>
						</div>
					</div>
				</div>
				<div className="game-card">
					<img className="game-card-image" src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_sm_120.jpg?t=1668125812" alt="game image"/>
					<div className="game-card-info">
						<div className="game-card-up">
							<p>Counter-Strike: Global Offensive</p>
							<p>21 Aug, 2012</p>
						</div>
						<div className="game-card-down">
							<p>8,19€</p>
							<img src={LikeFalseIcon} alt="not like icon"/>
						</div>
					</div>
				</div>
				<div className="game-card">
					<img className="game-card-image" src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_sm_120.jpg?t=1668125812" alt="game image"/>
					<div className="game-card-info">
						<div className="game-card-up">
							<p>Counter-Strike: Global Offensive</p>
							<p>21 Aug, 2012</p>
						</div>
						<div className="game-card-down">
							<p>8,19€</p>
							<img src={LikeFalseIcon} alt="not like icon"/>
						</div>
					</div>
				</div>
				<div className="game-card">
					<img className="game-card-image" src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_sm_120.jpg?t=1668125812" alt="game image"/>
					<div className="game-card-info">
						<div className="game-card-up">
							<p>Counter-Strike: Global Offensive</p>
							<p>21 Aug, 2012</p>
						</div>
						<div className="game-card-down">
							<p>8,19€</p>
							<img src={LikeFalseIcon} alt="not like icon"/>
						</div>
					</div>
				</div>
				<div className="game-card">
					<img className="game-card-image" src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_sm_120.jpg?t=1668125812" alt="game image"/>
					<div className="game-card-info">
						<div className="game-card-up">
							<p>Counter-Strike: Global Offensive</p>
							<p>21 Aug, 2012</p>
						</div>
						<div className="game-card-down">
							<p>8,19€</p>
							<img src={LikeFalseIcon} alt="not like icon"/>
						</div>
					</div>
				</div>
				<div className="game-card">
					<img className="game-card-image" src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_sm_120.jpg?t=1668125812" alt="game image"/>
					<div className="game-card-info">
						<div className="game-card-up">
							<p>Counter-Strike: Global Offensive</p>
							<p>21 Aug, 2012</p>
						</div>
						<div className="game-card-down">
							<p>8,19€</p>
							<img src={LikeFalseIcon} alt="not like icon"/>
						</div>
					</div>
				</div>
				<div className="game-card">
					<img className="game-card-image" src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_sm_120.jpg?t=1668125812" alt="game image"/>
					<div className="game-card-info">
						<div className="game-card-up">
							<p>Counter-Strike: Global Offensive</p>
							<p>21 Aug, 2012</p>
						</div>
						<div className="game-card-down">
							<p>8,19€</p>
							<img src={LikeFalseIcon} alt="not like icon"/>
						</div>
					</div>
				</div>
				<div className="game-card">
					<img className="game-card-image" src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_sm_120.jpg?t=1668125812" alt="game image"/>
					<div className="game-card-info">
						<div className="game-card-up">
							<p>Counter-Strike: Global Offensive</p>
							<p>21 Aug, 2012</p>
						</div>
						<div className="game-card-down">
							<p>8,19€</p>
							<img src={LikeFalseIcon} alt="not like icon"/>
						</div>
					</div>
				</div>
				<div className="game-card">
					<img className="game-card-image" src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_sm_120.jpg?t=1668125812" alt="game image"/>
					<div className="game-card-info">
						<div className="game-card-up">
							<p>Counter-Strike: Global Offensive</p>
							<p>21 Aug, 2012</p>
						</div>
						<div className="game-card-down">
							<p>8,19€</p>
							<img src={LikeFalseIcon} alt="not like icon"/>
						</div>
					</div>
				</div>
				<div className="game-card">
					<img className="game-card-image" src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_sm_120.jpg?t=1668125812" alt="game image"/>
					<div className="game-card-info">
						<div className="game-card-up">
							<p>Counter-Strike: Global Offensive</p>
							<p>21 Aug, 2012</p>
						</div>
						<div className="game-card-down">
							<p>8,19€</p>
							<img src={LikeFalseIcon} alt="not like icon"/>
						</div>
					</div>
				</div>
				<div className="game-card">
					<img className="game-card-image" src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_sm_120.jpg?t=1668125812" alt="game image"/>
					<div className="game-card-info">
						<div className="game-card-up">
							<p>Counter-Strike: Global Offensive</p>
							<p>21 Aug, 2012</p>
						</div>
						<div className="game-card-down">
							<p>8,19€</p>
							<img src={LikeFalseIcon} alt="not like icon"/>
						</div>
					</div>
				</div>
				<div className="game-card">
					<img className="game-card-image" src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_sm_120.jpg?t=1668125812" alt="game image"/>
					<div className="game-card-info">
						<div className="game-card-up">
							<p>Counter-Strike: Global Offensive</p>
							<p>21 Aug, 2012</p>
						</div>
						<div className="game-card-down">
							<p>8,19€</p>
							<img src={LikeFalseIcon} alt="not like icon"/>
						</div>
					</div>
				</div>
				<div className="game-card">
					<img className="game-card-image" src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_sm_120.jpg?t=1668125812" alt="game image"/>
					<div className="game-card-info">
						<div className="game-card-up">
							<p>Counter-Strike: Global Offensive</p>
							<p>21 Aug, 2012</p>
						</div>
						<div className="game-card-down">
							<p>8,19€</p>
							<img src={LikeFalseIcon} alt="not like icon"/>
						</div>
					</div>
				</div>
				<div className="game-card">
					<img className="game-card-image" src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_sm_120.jpg?t=1668125812" alt="game image"/>
					<div className="game-card-info">
						<div className="game-card-up">
							<p>Counter-Strike: Global Offensive</p>
							<p>21 Aug, 2012</p>
						</div>
						<div className="game-card-down">
							<p>8,19€</p>
							<img src={LikeFalseIcon} alt="not like icon"/>
						</div>
					</div>
				</div>
				<div className="game-card">
					<img className="game-card-image" src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_sm_120.jpg?t=1668125812" alt="game image"/>
					<div className="game-card-info">
						<div className="game-card-up">
							<p>Counter-Strike: Global Offensive</p>
							<p>21 Aug, 2012</p>
						</div>
						<div className="game-card-down">
							<p>8,19€</p>
							<img src={LikeFalseIcon} alt="not like icon"/>
						</div>
					</div>
				</div>
				<div className="game-card">
					<img className="game-card-image" src="https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_sm_120.jpg?t=1668125812" alt="game image"/>
					<div className="game-card-info">
						<div className="game-card-up">
							<p>Counter-Strike: Global Offensive</p>
							<p>21 Aug, 2012</p>
						</div>
						<div className="game-card-down">
							<p>8,19€</p>
							<img src={LikeFalseIcon} alt="not like icon"/>
						</div>
					</div>
				</div>
			</main>
			<footer>
				<div className="gray-circle">
					<img src={LeftArrowIcon}/>
				</div>
				<div className="gray-circle">
					<p>1</p>
				</div>
				<div className="gray-circle">
					<p>2</p>
				</div>
				<div className="gray-circle">
					<p>3</p>
				</div>
				<div className="gray-circle">
					<img src={RightArrowIcon}/>
				</div>
			</footer>
		</>
	);
}

export default App;
