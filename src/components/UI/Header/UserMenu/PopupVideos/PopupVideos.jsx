import React, { useState } from "react";
import s from './PopupVideos.module.css';
import { BigBtn } from "../../../Buttons/UserButtons/BigBtn/BigBtn";

export function PopupVideos(props) {
	let data = props.data;

	let listVideo = props.data.video.map(elem => (
		<li className={s.videoWrap}
			key={elem.id}>
			<div className={s.video}>
				<iframe
					className={props.isActive ? s.active : ""}
					src={elem.src}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
				</iframe>
				<span className={s.videNum}>{elem.id}</span>
			</div>
			<p className={s.videoTitle}>
				{elem.title}
			</p>
		</li>
	))

	const onCloseClickHandler = () => {
		props.changeActive(!props.isActive);
	}

	const onConnectHandler = () => {
		props.setConnectActive(!props.connectActive);
	}

	const onConnectClickHandler = () => {
		onCloseClickHandler();
		onConnectHandler();

		setTimeout(() => {
			props.setEnter(!props.isEntered);
		}, 4000)

	}

	return (
		<div className={props.isActive ?
			"popup active" : "popup "
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
				<h1 className="title">{data.title}</h1>

				<ul className={s.listVideo}>
					{listVideo}
				</ul>

				<BigBtn title="Connect wallet"
					onClickHandler={onConnectClickHandler}
				/>
			</div>
		</div>
	);
}