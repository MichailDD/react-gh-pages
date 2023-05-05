import React from "react";
import s from './ListUserCard.module.css';
import { UserCard } from "./UserCard/UserCard";

export function ListUserCard(props) {

	let userCards = props.userCards.map(user => <UserCard
		name={user.name}
		nickname={user.nickname}
		date={user.date}
		photo={user.photo}
		key={user.id}
	/>)

	return (
		<ul className={s.list}>
			{userCards}
		</ul>
	);
}