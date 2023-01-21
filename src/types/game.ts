export type GameI = {
	url:string;
	title:string;
	price:string;
	imgUrl:string;
	appId?:string;
	released:string;
	reviewSummary?:string;
};

export interface TagI {
	url: string;
	name: string;
}

export interface GameCardI {
	title: string;
	imgUrl: string;
	released: string;
	tags: Array<TagI>;
	description: string;
	developer: DeveloperPublisherI;
	publisher: DeveloperPublisherI;
}

export interface DeveloperPublisherI {
	link: string;
	name: string;
}