import React, { useState } from "react";
import s from './Profile.module.css';
import { UserAvatarName } from "../UI/UserInfo/UserAvatarName/UserAvatarName";
import { UserInfoDescription } from "../UI/UserInfo/UserInfoDescription/UserInfoDescription";
import { SocialLink } from "../UI/Buttons/SocialLink/SocialLink";
import { BigBtn } from "../UI/Buttons/UserButtons/BigBtn/BigBtn";
import { SmallBtn } from "../UI/Buttons/UserButtons/SmallBtn/SmallBtn";
import { ListCard } from "../Main/ListCard/ListCard";
import { PopupFollowers } from "./PopupFollowers/PopupFollowers";
import { PopupEditProfile } from "./PopupEditProfile/PopupEditProfile";

export function Profile(props) {
	let images = props.images;

	let [showFollowers, setShowFollower] = useState(false);

	let [showEditing, setShowEdition] = useState(false);

	const onClickFollowerHandler = () => {
		setShowFollower(!showFollowers);
	}

	const onClickEditProfileHandler = () => {
		setShowEdition(!showEditing);
	}

	return (
		<div className="container">
			<div className={s.profile}>
				<div className={s.profileTop}>
					<UserAvatarName src={props.images.photo1} name={props.userInfo.name} nick={props.userInfo.nickname} />
					<div className={s.buttons}>
						<div className={s.followItem}>
							<span className={s.followValue}>
								{props.followers.followers}
							</span>
							<span className={s.followTitle}>Followers</span>
						</div>
						<div className={s.followItem}>
							<span className={s.followValue}>
								{props.followers.following}
							</span>
							<span className={s.followTitle}>Following</span>
						</div>

						<BigBtn title="Follow" onClickHandler={onClickFollowerHandler} />

						<div className={s.smallBtns}>
							<SmallBtn icon={images.optionIcon} alt="Option" />
							<SmallBtn icon={images.shareIcon} alt="Share" />
							<SmallBtn icon={images.otherIcon} alt="Others"
								onClickHandler={onClickEditProfileHandler}
							/>
						</div>
					</div>
				</div>
				<ul className={s.links}>
					<SocialLink title="Twitch"
						icon={images.twitchIcon}
						href="#"
					/>
					<SocialLink title="Instagram"
						icon={images.instagramIcon}
						href="#" />
					<SocialLink title="Twitter"
						icon={images.twitterIcon}
						href="#" />
					<SocialLink title="Onlyfans"
						icon={images.onlyfansIcon}
						href="#" />
				</ul>
				<article className={s.description}>
					<UserInfoDescription description={props.userInfo.description2} />
				</article>
			</div>

			<div className={s.listCards}>
				<div className={s.listLinks}>
					<a href="#">Created</a>
					<a href="#">Collected</a>
				</div>
				<ListCard images={props.images} cardsList={props.cardsList} />
			</div>

			<PopupFollowers closeIcon={images.closeIcon}
				isActive={showFollowers}
				onClickHandler={onClickFollowerHandler}
				userCardInfo={props.userCardInfo}
				setUserCardInfo={props.setUserCardInfo}
			/>

			<PopupEditProfile closeIcon={images.closeIcon}
				isActive={showEditing}
				onClickHandler={onClickEditProfileHandler}
				data={props.popupData}
			/>
		</div>
	);
}