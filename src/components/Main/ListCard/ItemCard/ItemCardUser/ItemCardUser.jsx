import React from "react";
import s from './ItemCardUser.module.css';

export function ItemCardUser(props) {

	return (
		<div className={s.wrap}>
			<div className={s.photoWrap}>
				<img className={s.photo} src={props.photo} alt="Photo" />
			</div>
			<div className={s.info}>
				<p className={s.name}>{props.name}</p>
				<p className={s.nickname}>{props.nickname}</p>
			</div>
		</div>
	);
}