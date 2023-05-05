import React from "react";
import s from './HeaderBtn.module.css';

export function HeaderBtn(props) {
	return (
		<button className={s.btn}
			onClick={props.onClickHandler}
		>
			{props.title}
		</button>
	);
}