import React, { useState } from "react";
import s from './Artwork.module.css';
import { ListCard } from "../Main/ListCard/ListCard";
import { PlaceBid } from "./PlaceBid/PlaceBid";
import { UserAvatarName } from "../UI/UserInfo/UserAvatarName/UserAvatarName";
import { UserInfoDescription } from "../UI/UserInfo/UserInfoDescription/UserInfoDescription";
import { UserInfoTitle } from "../UI/UserInfo/UserInfoTitle/UserInfoTitle";
import { SmallBtn } from "../UI/Buttons/UserButtons/SmallBtn/SmallBtn";
import { ActivityItem } from "./ActivityItem/ActivityItem";
import { PopupBid } from "./PopupBid/PopupBid";

export function Artwork(props) {
	let images = props.images;
	let activity = props.activity.map(elem => <ActivityItem
		image={elem.image}
		icon={images.icon2}
		iconBtn={images.optionIcon}
		title={elem.title}
		date={elem.date}
		bid={elem.bidInfo}
		key={elem.id}
	/>);

	let [isArtWorkPopup, setArtWorkPopup] = useState(false);

	return (
		<div className="container">
			<div className={s.hero}>
				<img className={s.heroImage}
					src={props.images.artworkHero}
					alt={props.userInfo.title}
				/>

				<PlaceBid
					bidInfo={props.bidInfo}
					isActive={isArtWorkPopup}
					changeActive={setArtWorkPopup}
				/>
				<PopupBid
					data={props.popupData}
					isActive={isArtWorkPopup}
					changeActive={setArtWorkPopup}
					closeIcon={images.closeIcon}
				/>
			</div>

			<div className={s.main}>
				<div className={s.user}>
					<UserAvatarName src={images.photo1} name={props.userInfo.name} nick={props.userInfo.nickname} />

					<UserInfoTitle title={props.userInfo.title} />

					<p className={s.copy}>
						Copy: <span>{props.userInfo.copy}</span>
					</p>

					<UserInfoDescription description={props.userInfo.description2} />

					<div className={s.buttons}>
						<SmallBtn icon={images.optionIcon} alt='Options' />
						<SmallBtn icon={images.shareIcon} alt='Share' />
						<SmallBtn icon={images.otherIcon} alt='Other' />
					</div>
				</div>

				<div className={s.activity}>
					<h2 className={s.activityTitle}>Activity</h2>

					<ul className={s.activityList}>
						{activity}
					</ul>
				</div>
			</div>

			<h2 className={s.listCardTitle}>Feature works</h2>
			<ListCard cardsList={props.cardsList} />
		</div>
	);
}