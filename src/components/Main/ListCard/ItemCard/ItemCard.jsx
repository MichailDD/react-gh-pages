import React from "react";
import s from './ItemCard.module.css';
import { ItemCardUser } from "./ItemCardUser/ItemCardUser";

export function ItemCard(props) {

	return (
		<div className={s.card}>
			<div className={s.imageBlock}>
				<ItemCardUser
					name={props.name}
					nickname={props.nickname}
					photo={props.photo}
				/>

				<img className={s.picture} src={props.pic} alt={props.title} />
			</div>

			<div className={s.infoBlock}>
				<h1 className={s.title}>{props.title}</h1>

				<div className={s.item}>
					<p className={s.itemTitle}>Sold for:</p>
					<p className={s.itemText}>
						<img src={props.icon} alt="icon" />
						<span>{props.sold}</span>
					</p>
				</div>
				
				<div className={s.item}>
					<p className={s.itemTitle}>Ending in:</p>
					<p className={s.itemText}>{props.date}</p>
				</div>
			</div>
		</div>
	);
}