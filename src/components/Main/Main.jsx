import React, { useState } from "react";
import s from './Main.module.css';
import { Hero } from "./Hero/Hero";
import { Select } from "../UI/Select/Select";
import { ListCard } from "./ListCard/ListCard";
import { UsersSlider } from "../UI/UsersSlider/UsersSlider";

export function Main(props) {

	return (
		<div className="container">
			<Hero
				images={props.images}
				userInfo={props.userInfo}
				slides={props.slides}
			/>
			<div className={s.selects}>
				<Select title="Recently added"
					icon={props.images.selectIcon} />
				<Select title="Auctions"
					icon={props.images.selectIcon} />
			</div>

			<ListCard cardsList={props.cardsList} />
			<h1 className={s.footerTitle}>Featured creators</h1>

			<UsersSlider userCardInfo={props.userCardInfo} />
		</div>
	);
}