import React, { useState } from "react";
import { Link } from "react-router-dom";
import s from './UserMenuInfo.module.css';

export function UserMenuInfo(props) {
	let images = props.images;
	let info = props.userInfo;

	let [isShowMenu, setShowMenu] = useState(false);

	const onClickMenuHandler = () => {
		setShowMenu(!isShowMenu);
	}

	return (

		<div className={s.wrap}
		>
			<img className={s.photo} src={info.photo} alt={info.name}
				onClick={onClickMenuHandler}
			/>
			<div className={s.user}
				onClick={onClickMenuHandler}
			>
				<p className={s.name}>
					{info.name}
				</p>
				<div className={s.userBottom}>
					<p className={s.nickname}>
						{info.nickname}
					</p>
					<div className={s.balance}>
						<span className={s.balanceTitle}>Balance:</span>
						<span className={s.balanceValue}>
							<img className={s.balanceIcon}
								src={images.icon2} alt="icon"
							/>
							{info.balance}
						</span>
					</div>
				</div>
			</div>
			<img className={s.selectIcon}
				src={images.menuArrow} alt="icon"
				onClick={onClickMenuHandler}
			/>

			<ul className={isShowMenu ? `${s.menu} ${s.active}` : s.menu}>
				<li className={s.menuItem}>
					Address: 0c0xcx1cx606g4516x51g1...
				</li>
				<li className={s.menuItem}>
					<Link className={s.menuLink} to="/profile">My profile</Link>
				</li>
				<li className={s.menuItem}>
					Balance settings
				</li>
				<li className={s.menuItem}
					onClick={props.onClickLogOutHandler}
				>
					Log out
				</li>
			</ul>
		</div>
	);
}