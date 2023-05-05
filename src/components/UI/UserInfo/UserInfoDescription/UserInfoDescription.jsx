import React from "react";
import s from './UserInfoDescription.module.css';


export function UserInfoDescription(props) {
	return (
		<p className={s.description}>
			<span>Description: </span>
			{props.description}
		</p>
	);
}