import React from "react";
import s from './ProfileEditImage.module.css';

export function ProfileEditImage(props) {
	let data = props.data;

	return (
		<div className={s.wrap}>
			<img className={s.image}
				src={data.file}
				alt={data.filename} />
			<div className={s.info}>
				<p className={s.text}>{data.filename}</p>
				<p className={s.text}>{data.size}</p>
				<p className={`${s.text} ${s.red}`}>
					<img className={s.delIcon}
						src={data.delIcon}
						alt="del" />
					<span>delete file</span>
				</p>
			</div>
		</div>
	);
}