import React, { useState } from "react";
import s from './PopupConnect.module.css';
import { BigBtn } from "../../../Buttons/UserButtons/BigBtn/BigBtn";

export function PopupConnect(props) {
	if (props.isActive) {
		setTimeout(() => {
			props.changeActive(!props.isActive);
		}, 4000)
	}

	const onCloseClickHandler = () => {
		props.changeActive(!props.isActive);
	}

	return (
		<div className={props.isActive ?
			"popup active" : "popup"
		}
			onClick={onCloseClickHandler}
		>
			<div className="content"
				onClick={e => { e.stopPropagation() }}
			>
				<button
					className="close"
					onClick={onCloseClickHandler}
				>
					<img className="closeIcon" src={props.closeIcon} alt='close' />
				</button>
				<h1 className="title">{props.data.title}</h1>

				<div className={s.loadingWrap}>
					<div className={s.loading}></div>
					<div className={s.imageWrap}>
						<img src={props.data.fox} alt="fox" />
					</div>
				</div>

				<p className={s.text}>Initializing</p>
			</div>
		</div>
	);
}