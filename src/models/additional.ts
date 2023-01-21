import { AdditionalI } from "../types/additional";
import { sortTypes, sortValues } from "../models/sort";

export const additional: AdditionalI = {
	page: 1,
	gameInfo: null,
	likedGames: [],
	loaderStatus: true,
	sortType: sortTypes[0],
	sortValue: sortValues[0].value,
};