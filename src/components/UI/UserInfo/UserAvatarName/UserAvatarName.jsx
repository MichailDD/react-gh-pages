import React from "react";
import s from './UserAvatarName.module.css';



export function UserAvatarName(props) {
	return (
		<div className={s.wrap}>
			<div className={s.avatarWrap}>
				<img className={s.avatarImg} src={props.src} alt={props} loading="lazy" />
			</div>

			<div className={s.textWrap}>
				<p className={s.name}>
					{props.name}
				</p>
				<p className={s.nick}>
					{props.nick}
				</p>
			</div>
		</div>
	);
}