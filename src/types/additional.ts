import { GameCardI, GameI } from "./game";

export interface AdditionalI {
	[key: string]: number|null|string|boolean|Array<GameI>|GameCardI;
}