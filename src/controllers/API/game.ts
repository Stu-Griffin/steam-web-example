import axios from "axios";

class GameAPIActions {
	constructor(private url: string, private host: string, private key: string) {}

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
}

const gameAPI = new GameAPIActions("https://steam2.p.rapidapi.com", "steam2.p.rapidapi.com", "73665120b4msh2ba5486c199a33dp1a9f86jsn9f76649a6ba7");

export default gameAPI;