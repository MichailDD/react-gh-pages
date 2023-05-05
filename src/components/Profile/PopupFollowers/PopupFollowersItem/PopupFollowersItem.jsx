import React, { useState } from "react";
import { FollowBtn } from "../../../UI/Buttons/UserButtons/FollowBtn/FollowBtn";
import s from './PopupFollowersItem.module.css';

export function PopupFollowersItem(props) {

	return (
		<li className={s.item}>

			<div className={s.userInfo}>
				<img className={s.photo} src={props.photo} alt={props.name} />
				<div className={s.infoWrap}>
					<p className={s.name}>{props.name}</p>
					<p className={s.nickname}>{props.nickname}</p>
				</div>
			</div>

			<FollowBtn title={props.follow ? 'Follow' : 'Unfollow'}
				follow={props.follow}
				userCardInfo={props.userCardInfo}
				setUserCardInfo={props.setUserCardInfo}
				id={props.id}
			/>

		</li>
	);
}