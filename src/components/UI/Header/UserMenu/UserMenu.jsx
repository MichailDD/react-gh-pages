import React from "react";
import s from './UserMenu.module.css';
import { HeaderBtn } from "../../Buttons/HeaderBtn/HeaderBtn";
import { UserMenuInfo } from "./UserMenuInfo/UserMenuInfo";

export function UserMenu(props) {
	return (
		<div className={s.user}>
			<HeaderBtn title="+ Add artwork"
				onClickHandler={props.onClickCreatingHandler}
			/>
			<UserMenuInfo
				images={props.images}
				userInfo={props.userInfo}
				onClickLogOutHandler={props.onClickHandler}
			/>

		</div>
	);
}