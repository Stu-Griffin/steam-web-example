import { AdditionalI } from "../types/additional";
import React, { ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../types/redux";
import LeftArrowIcon from "../assets/icons/arrow-left.svg";
import RightArrowIcon from "../assets/icons/arrow-right.svg";
import { setChangeValue } from "../controllers/redux/additional";

export default function Footer(): ReactElement {
	const dispatch: AppDispatch = useDispatch();
	const [pageStart, setPageStart] = useState<number>(1);
	const {page}: AdditionalI = useSelector((state: RootState) => state.additional);

	const switchPage = (): void => {
		setPageStart((state: number) => state+3);
		dispatch(setChangeValue({key: "page", value: (page as number)+3}));
	};

	const nextPage = (number: number): void => {
		dispatch(setChangeValue({key: "page", value: number}));
	};

	return (
		<footer>
			<div onClick={switchPage} className="gray-circle">
				<img src={LeftArrowIcon}/>
			</div>
			<div onClick={() => nextPage(pageStart)} className="gray-circle">
				<p>{pageStart}</p>
			</div>
			<div onClick={() => nextPage(pageStart+1)} className="gray-circle">
				<p>{pageStart+1}</p>
			</div>
			<div onClick={() => nextPage(pageStart+2)} className="gray-circle">
				<p>{pageStart+2}</p>
			</div>
			<div onClick={switchPage} className="gray-circle">
				<img src={RightArrowIcon}/>
			</div>
		</footer>
	);
}