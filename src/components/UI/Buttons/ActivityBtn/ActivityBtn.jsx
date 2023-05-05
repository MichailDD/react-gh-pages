import React from "react";
import s from './ActivityBtn.module.css';

export function ActivityBtn(props) {
	return (
		<button className={s.btn}>
			<img src={props.icon} alt="option" />
		</button>
	);
}