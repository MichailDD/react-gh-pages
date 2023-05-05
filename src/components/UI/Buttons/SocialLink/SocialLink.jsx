import React from "react";
import s from './SocialLink.module.css';

export function SocialLink(props) {
	return (
		<a className={s.link} href={props.href}>
			<img src={props.icon} alt={props.title} />
			{props.title}
		</a>
	);
}