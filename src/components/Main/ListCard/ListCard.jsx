import React from "react";
import { ItemCard } from "./ItemCard/ItemCard";
import s from './ListCard.module.css';

export function ListCard(props) {

	let cardsList = props.cardsList.map(card => <ItemCard
		name={card.name}
		nickname={card.nickname}
		title={card.title}
		date={card.time}
		sold={card.sold}
		icon={card.icon}
		pic={card.image}
		photo={card.photo}
		key={card.id}
	/>)

	return (
			<ul className={s.list}>
				{cardsList}
			</ul>
	);
}