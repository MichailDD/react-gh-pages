import React, { useState } from "react";
import s from './Header.module.css';
import { InputSearch } from "./InputSearch/InputSearch";
import { HeaderBtn } from "../Buttons/HeaderBtn/HeaderBtn";
import { UserMenu } from "./UserMenu/UserMenu";
import { PopupCreatingArtwork } from "../../Artwork/PopupCreatingArtwork/PopupCreatingArtwork";


export function Header(props) {
	let images = props.images;




	const onConnectClickHandler = () => {
		props.changeActiveVideo(!props.activeVideo)
	}

	const onClickHandler = () => {
		props.setEnter(!props.isEntered);
	}

	const onClickCreatingHandler = () => {
		props.setCreatingPopup(!props.creatingPopup)
	}

	return (
		<header className={s.header}>
			<img className={s.logo} src={images.logo} alt="Logo" loading="lazy" />

			<InputSearch src={images.searchIcon} alt="search" placeholder="Search for..." />
			{
				props.isEntered ?
					<UserMenu images={props.images}
						userInfo={props.userInfo}
						onClickHandler={onClickHandler}
						onClickCreatingHandler={onClickCreatingHandler}
					/> :
					<HeaderBtn title="Connect wallet"
						onClickHandler={onConnectClickHandler}
					/>
			}
		</header>
	);
}