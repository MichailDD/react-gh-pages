import React from "react";
import { ActivityBtn } from "../../UI/Buttons/ActivityBtn/ActivityBtn";
import s from './ActivityItem.module.css';

export function ActivityItem(props) {
	return (
		<li className={s.item}>
			<div className={s.left}>
				<img className={s.image} src={props.image} alt="img" />
				<div className={s.leftInfo}>
					<h1 className={s.title}>{props.title}</h1>
					<p className={s.date}>{props.date}</p>
				</div>
			</div>
			<div className={s.right}>
				<img className={s.icon} src={props.icon} alt="icon" />
				<p className={s.price}>
					{props.bid.currentBid}
					<span>{props.bid.valueBid}</span>
				</p>
				<ActivityBtn icon={props.iconBtn} />
			</div>
		</li>
	);
}