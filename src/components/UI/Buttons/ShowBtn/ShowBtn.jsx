import React from "react";
import s from './ShowBtn.module.css';

export function ShowBtn(props) {
	return (
		<button className={s.btn}>
			<span className={s.title}>{props.title}</span>
		</button>
	);
}