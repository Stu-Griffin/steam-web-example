import React, { ReactElement } from "react";

export const gameTitle = (title: string): ReactElement => {
	return (title.length > 25) ? <p>{title.slice(0, 25)}...</p> : <p>{title}</p>;
};

export const gamePrice = (price: string): ReactElement => {
	if(price.trim() !== "" && (price.toLowerCase()).trim() !== "free to play"  && (price.toLowerCase()).trim() !== "free demo" && (price.toLowerCase()).trim() !== "free") {
		const el: Array<string> = price.trim().split("€").reverse();
		el.splice(0, 1).reverse();
		if(el.length === 1) {
			return (
				<p>{el[0]}€</p>
			);
		} else {
			return (
				<div className="game-card-price-box">
					<p className="game-card-previous-price">{el[1]}€</p>
					<p>{el[0]}€</p>
				</div>
			);
		}
	} else {
		return (
			<p>{price}</p>
		);
	}
};