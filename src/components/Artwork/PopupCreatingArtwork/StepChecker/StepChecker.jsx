import React from "react";
import s from './StepChecker.module.css';

export function StepChecker(props) {

	return (
		<>
			<ul className={s.list}>
				<li className={`${s.item} ${s.active}`}></li>
				<li className={
					props.creatingStep2 || props.creatingStep3 ?
						`${s.item} ${s.active}` : s.item
				}
				></li>
				<li className={
					props.creatingStep3 ?
						`${s.item} ${s.active}` : s.item
				}></li>
			</ul>
		</>
	);
}