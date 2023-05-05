import React from "react";
import s from './InputSearch.module.css';



export function InputSearch(props) {
	return (
		<div className={s.wrap}>
			<input className={s.input} type="text" placeholder={props.placeholder} />
			<img className={s.icon} src={props.src} alt={props.alt} />
		</div>
	);
}