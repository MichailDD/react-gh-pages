import React from "react";
import s from './UserInfo.module.css';
import { BigBtn } from "../Buttons/UserButtons/BigBtn/BigBtn";
import { SmallBtn } from "../Buttons/UserButtons/SmallBtn/SmallBtn";
import { UserAvatarName } from "./UserAvatarName/UserAvatarName";
import { UserInfoDescription } from "./UserInfoDescription/UserInfoDescription";
import { UserInfoTitle } from "./UserInfoTitle/UserInfoTitle";


export function UserInfo(props) {
	let images = props.images;

	return (
		<div className={s.wrap}>
			<UserAvatarName src={images.photo1} name={props.userInfo.name} nick={props.userInfo.nickname} />

			<UserInfoTitle title={props.userInfo.title} />

			<UserInfoDescription description={props.userInfo.description} />

			<div className={s.userFooter}>
				<div className={s.soldWrap}>
					<p className={s.soldText}>Sold for:</p>
					<img src={images.icon2} alt="sold" className={s.soldIcon} />
					<p className={s.amountSold}>1,5M</p>
				</div>

				<div className={s.buttons}>
					<div className={s.bigBtn}>
						<BigBtn title="View" />
					</div>
					<SmallBtn icon={images.optionIcon} alt="Op" />
					<SmallBtn icon={images.shareIcon} />
					<SmallBtn icon={images.otherIcon} />
				</div>
			</div>
		</div>
	);
}