import { SortValueI } from "../types/sort";
import DateIcon from "../assets/icons/date.svg";
import PriceIcon from "../assets/icons/price.svg";

export const sortValues: Array<SortValueI> = [
	{
		value: "Price",
		icon: PriceIcon,
	},
	{
		icon: DateIcon,
		value: "Publish Date",
	},
];

export const sortTypes: Array<string> = ["Lower to bigger", "Bigger to lower"];