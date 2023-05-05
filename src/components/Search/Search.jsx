import React from "react";
// import { UserCard } from "../Main/ListUserCard/UserCard/UserCard";
import { ItemCard } from "../Main/ListCard/ItemCard/ItemCard";
import { Select } from "../UI/Select/Select";
import s from './Search.module.css';
import { ShowBtn } from "../UI/Buttons/ShowBtn/ShowBtn";
import 'swiper/css';
import { UsersSlider } from "../UI/UsersSlider/UsersSlider";

export function Search(props) {

	let listCard = [];

	for (let i = 0; i < 4; i++) {
		listCard.push(<ItemCard
			name={props.cardsList[i].name}
			nickname={props.cardsList[i].nickname}
			title={props.cardsList[i].title}
			date={props.cardsList[i].time}
			sold={props.cardsList[i].sold}
			icon={props.cardsList[i].icon}
			pic={props.cardsList[i].image}
			photo={props.cardsList[i].photo}
			key={props.cardsList[i].id}
		/>)
	}

	// let listUsers = props.userCardInfo.map(user => <UserCard
	// 	name={user.name}
	// 	nickname={user.nickname}
	// 	date={user.date}
	// 	photo={user.photo}
	// 	key={user.id}
	// />)

	return (
		<div className="container">
			<div className={s.cards}>
				<div className={s.selects}>
					<Select title="Recently added"
						icon={props.images.selectIcon} />
					<Select title="Auctions"
						icon={props.images.selectIcon} />
				</div>

				<ul className={s.listCards}>
					{listCard}
				</ul>

				<ShowBtn title="Show all" />
			</div>
			<UsersSlider userCardInfo={props.userCardInfo} />
		</div>
	);
}