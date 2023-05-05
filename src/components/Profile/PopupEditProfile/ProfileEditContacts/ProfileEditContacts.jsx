import React from "react";
import { TextInput } from "../../../UI/Forms/TextInput/TextInput";
import s from './ProfileEditContacts.module.css';

export function ProfileEditContacts(props) {
	let listContacts = props.data.map((elem, index) => <li className={s.item}
		key={index}
	>
		<p className={s.itemTitle}>
			<img src={elem.icon} alt={elem.title} />
			<span>{elem.title}</span>
		</p>
		<TextInput type="text"/>
	</li>);



	return (
		<ul className={s.list}>
			{listContacts}
		</ul>
	);
}