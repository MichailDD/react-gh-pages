import React, { useState } from "react";
import s from '../FormStyles.module.css';

export function RadioInput(props) {
	return (
		<label className={s.custom}>
			<input className={s.inpRadio}
				type="radio"
				name={props.name}
				checked={props.checked}
				onChange={props.onChangeCheckHandler}
			/>
			<span className={s.customRadio}></span>
			<p className={s.text}>{props.text}</p>
		</label>
	);
}