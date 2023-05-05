import React from "react";
import s from './Select.module.css';

export function Select(props) {

	return (
		<div className={s.select}>
			<span>{props.title}</span>
			<img src={props.icon} alt="icon" />
		</div>
	);
}