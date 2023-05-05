import React from "react";
import s from './UserCard.module.css';

export function UserCard(props) {
	return (
		<li className={s.wrap}>
			<img className={s.photo} src={props.photo} alt={props.name} />
			<h2 className={s.name}>{props.name}</h2>
			<p className={s.nickname}>{props.nickname}</p>
			<p className={s.date}>{props.date}</p>
		</li>
	);
}