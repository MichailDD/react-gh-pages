import React, { useState } from "react";
import s from '../FormStyles.module.css';

export function TextInput(props) {

	let [textInputValue, setTextInputValue] = useState('');

	const onChangeHandler = e => {
		setTextInputValue(e.currentTarget.value);
	}

	return (
		<>
			<input className={s.input}
				name={props.name}
				type={props.type}
				value={textInputValue}
				onChange={onChangeHandler}
			/>
		</>
	);
}