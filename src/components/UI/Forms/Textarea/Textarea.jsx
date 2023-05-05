import React, { useState } from "react";
import s from '../FormStyles.module.css';

export function Textarea(props) {

	let [textareaValue, setTextareaValue] = useState('');

	const onChangeHandler = e => {
		setTextareaValue(e.currentTarget.value);
	}

	return (
		<>
			<textarea className={s.textarea}
				cols="30" rows="10"
				name={props.name}
				value={textareaValue}
				onChange={onChangeHandler}
			/>
		</>
	);
}