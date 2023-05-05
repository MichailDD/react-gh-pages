import React from "react";
import s from './InputSum.module.css';

export function InputSum(props) {

	return (
		<div className={s.wrap}>
			<div className={s.inputWrap}>
				<input className={s.input}
					type={props.type}
				/>
				<span className={s.text}>{props.text}</span>
			</div>
			<span className={s.value}>{`(${props.value}$)`}</span>
		</div>
	);
}