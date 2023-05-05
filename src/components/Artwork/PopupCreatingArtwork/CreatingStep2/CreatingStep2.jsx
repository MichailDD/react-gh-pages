import React from "react";
import s from './CreatingStep2.module.css';
import { BigBtn } from "../../../UI/Buttons/UserButtons/BigBtn/BigBtn";

export function CreatingStep2(props) {
	const onClickHandler = () => {
		props.setCurrentStep(!props.currentStep);
		props.setNextStep(!props.nextStep);
	}

	return (
		<>
			<div className="stepNum">
				{props.data.num}
			</div>

			<h2 className={s.title}>
				{props.data.uploadTitle}
			</h2>

			<img className={s.image} src={props.data.image} alt='Image' />

			<div className={s.icons}>
				<img className={s.icon} src={props.data.icons.pic} alt="pic" />
				<img className={s.icon} src={props.data.icons.stick} alt="pic" />
				<img className={s.icon} src={props.data.icons.blur} alt="pic" />
			</div>

			<BigBtn title="Next step"
				onClickHandler={onClickHandler}
			/>
		</>
	);
}