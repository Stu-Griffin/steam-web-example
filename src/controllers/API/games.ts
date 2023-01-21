import axios from "axios";

class GameAPIActions {
	constructor(private url: string, private host: string, private key: string) {}

	getGame = async (id: number) => {
		try {
			const options = {
				headers: {
					"X-RapidAPI-Key": this.key,
					"X-RapidAPI-Host": this.host,
				},
				method: "GET",
				url: `${this.url}/appDetail/${id}`,
			};
			const {data} = await axios.request(options);
			return(data);
		} catch (error) {
			console.log(error);
		}
	};

	getGames = async (searchWord: string, page: number) => {
		try {
			const options = {
				headers: {
					"X-RapidAPI-Key": this.key,
					"X-RapidAPI-Host": this.host,
				},
				method: "GET",
				url: `${this.url}/search/${searchWord || "Counter"}/page/${page}`,
			};
			const {data} = await axios.request(options);
			return(data);
		} catch (error) {
			console.log(error);
		}
	};
}

const gameAPI = new GameAPIActions(`${process.env.REACT_APP_API_URL}`, `${process.env.REACT_APP_API_HOST}`, `${process.env.REACT_APP_API_KEY}`);

export default gameAPI;