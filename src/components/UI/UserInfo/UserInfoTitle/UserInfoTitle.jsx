import React from "react";
import s from './UserInfoTitle.module.css';


export function UserInfoTitle(props) {
	return (
		<h1 className={s.title}>
		{props.title}
	</h1>
	);
}