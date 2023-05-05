import React, { useState } from "react";
import s from './Quantity.module.css';

export function Quantity(props) {

	let [count, setCount] = useState(1);

	const plusHandler = () => { setCount(count + 1) };
	const minusHandler = () => {
		if (count > 1) {
			setCount(count - 1);
		}
	};
	return (
		<div className={s.wrap}>
			<button className={(count === 1 )?`${s.minus} ${s.disable}`: s.minus}
				onClick={minusHandler}
			>-</button>
			<span className={s.value}>{count}</span>
			<button className={s.plus}
				onClick={plusHandler}
			>+</button>
		</div>
	);
}