import React from "react";
import s from './PopupEditProfile.module.css';
import { TextInput } from "../../UI/Forms/TextInput/TextInput";
import { Textarea } from "../../UI/Forms/Textarea/Textarea";
import { ProfileEditImage } from "./ProfileEditImage/ProfileEditImage";
import { ProfileEditContacts } from "./ProfileEditContacts/ProfileEditContacts";
import { BigBtn } from "../../UI/Buttons/UserButtons/BigBtn/BigBtn";

export function PopupEditProfile(props) {
	let data = props.data;

	const handleSubmit = e => { e.preventDefault() };

	return (
		<div className={
			props.isActive ?
				"popup active" : "popup"
		}
			onClick={props.onClickHandler}
		>
			<div className="content profile"
				onClick={e => { e.stopPropagation() }}
			>
				<button
					className="close"
					onClick={props.onClickHandler}
				>
					<img className="closeIcon" src={props.closeIcon} alt='close' />
				</button>
				<h1 className="title">Edit your Profile</h1>
				<form onSubmit={handleSubmit}>
					<div className={s.userWrap}>
						<div className={s.inputWrap}>
							<p className={s.inputTitle}>{data.name}</p>
							<TextInput name={data.name} type="text" />
						</div>
						<div className={`${s.inputWrap} ${s.symbol}`}>
							<p className={s.inputTitle}>{data.username}</p>
							<TextInput name={data.username} type="text" />
						</div>
					</div>
					<div className={s.emailWrap}>
						<div className={s.inputWrap}>
							<p className={s.inputTitle}>{data.email}</p>
							<TextInput name={data.email} type="email" />
						</div>
						<p className={s.descriptionMail}>{data.description}</p>
					</div>
					<div className={s.inputWrap}>
						<p className={s.inputTitle}>{data.textarea}</p>
						<Textarea name={data.textarea} type="textarea" />
					</div>

					<p className={s.inputTitle}>{data.imageTitle}</p>
					<ProfileEditImage data={props.data.image} />

					<p className={s.inputTitle}>{data.contacts.title}</p>
					<ProfileEditContacts data={data.contacts.items} />

					<BigBtn title="Save changes"/>
				</form>
			</div>
		</div>
	);
}