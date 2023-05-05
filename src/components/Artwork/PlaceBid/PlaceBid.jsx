import React from "react";
import { BigBtn } from "../../UI/Buttons/UserButtons/BigBtn/BigBtn";
import { Popup, PopUp } from "../PopupBid/PopupBid";
import s from './PlaceBid.module.css';

export function PlaceBid(props) {

	const onClickHandler = () => {
		props.changeActive(!props.isActive);
	}

	return (
		<ul className={s.list}>
			<li className={s.item}>
				<p className={s.title}>Current Bid:</p>
				<div className={s.textWrap}>
					<img className={s.icon} src={props.bidInfo.icon} alt="icon" />
					<p className={s.text}>
						{props.bidInfo.currentBid}
						<span>
							{props.bidInfo.valueBid}
						</span>
					</p>
				</div>
			</li>
			<li className={s.item}>
				<p className={s.title}>Auction ending in:</p>
				<div className={s.dateWrap}>
					<span>{props.bidInfo.time.h}</span>
					<span>{props.bidInfo.time.m}</span>
					<span>{props.bidInfo.time.s}</span>
				</div>
			</li>
			<li className={s.item}>
				<BigBtn title="Place a bid"
					onClickHandler={onClickHandler}
				/>
			</li>
		</ul>
	);
}