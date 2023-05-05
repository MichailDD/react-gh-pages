import React from "react";
import s from './PopupFollowers.module.css';
import { PopupFollowersItem } from "./PopupFollowersItem/PopupFollowersItem";

export function PopupFollowers(props) {

	let following = props.userCardInfo.map(user => <PopupFollowersItem
		id={user.id}
		key={user.id}
		name={user.name}
		nickname={user.nickname}
		photo={user.photo}
		follow={user.follow}
		userCardInfo={props.userCardInfo}
		setUserCardInfo={props.setUserCardInfo}
	/>);
	// let followers = '';

	return (
		<div className={
			props.isActive ?
				"popup active" : "popup"
		}
			onClick={props.onClickHandler}
		>
			<div className={s.content}
				onClick={e => { e.stopPropagation() }}
			>
				<button
					className="close"
					onClick={props.onClickHandler}
				>
					<img className="closeIcon" src={props.closeIcon} alt='close' />
				</button>
				<div className={s.header}>
					<p className={`${s.title} ${s.active}`}>Following</p>
					<p className={s.title}>Followers</p>

				</div>
				<div className={s.body}>
					<ul className={s.list}>
						{following}
					</ul>
				</div>

			</div>
		</div>
	);
}