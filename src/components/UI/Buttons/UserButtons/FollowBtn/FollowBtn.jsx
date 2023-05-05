import React from "react";
import s from './FollowBtn.module.css';

export function FollowBtn(props) {



	const onClickHandler = (id) => {
		props.userCardInfo.forEach(item => {
			if (item.id === id) {
				item.follow = !item.follow;
				console.log({id:props.id, follow: item.follow });
			}
		})

		let copy = props.userCardInfo;

		props.setUserCardInfo([...copy]);
	}

	return (
		<button className={props.follow ?
			s.btn : `${s.unBtn}`}
			onClick={() => { onClickHandler(props.id) }}
		>
			<span>{props.title}</span>
		</button>
	);
}