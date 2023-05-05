import React from "react";
import { BigBtn } from "../../../UI/Buttons/UserButtons/BigBtn/BigBtn";
import s from './CreatingStep1.module.css';
import { StepFileUploader } from "./StepFileUploader/StepFileUploader";

export function CreatingStep1(props) {
	let data = props.data.step1;

	const onClickHandler = () => {
		props.setCurrentStep(!props.currentStep);
		props.setNextStep(!props.nextStep);
	}

	return (
		<div className={s.wrap}>
			<div className="stepNum">
				{data.num}
			</div>

			<h2 className={s.title}>
				{data.uploadTitle}
			</h2>

			<StepFileUploader
				data={props.data.step1}
				currentStep={props.currentStep}
				nextStep={props.nextStep}
				setCurrentStep={props.setCurrentStep}
				setNextStep={props.setNextStep}
			/>

			<BigBtn title="Next step" 
				onClickHandler={onClickHandler}
			/>
		</div>
	);
}