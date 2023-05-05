import React, { useState } from "react";
import { CreatingStep1 } from "./CreatingStep1/CreatingStep1";
import { CreatingStep2 } from "./CreatingStep2/CreatingStep2";
import { CreatingStep3 } from "./CreatingStep3/CreatingStep3";
import s from './PopupCreatingArtwork.module.css';
import { StepChecker } from "./StepChecker/StepChecker";

export function PopupCreatingArtwork(props) {
	let [creatingStep1, setCreatingStep1] = useState(true);
	let [creatingStep2, setCreatingStep2] = useState(false);
	let [creatingStep3, setCreatingStep3] = useState(false);

	const onClickHandler = () => {
		props.setCreatingPopup(!props.isActive);
	}

	return (
		<div className={
			props.isActive ?
				"popup active" : "popup"
		}
			onClick={onClickHandler}
		>
			<div className="content"
				onClick={e => { e.stopPropagation() }}
			>
				<button
					className="close"
					onClick={onClickHandler}
				>
					<img className="closeIcon" src={props.closeIcon} alt='close' />
				</button>
				<h1 className="title">{props.data.title}</h1>
				<StepChecker
					creatingStep1={creatingStep1}
					creatingStep2={creatingStep2}
					creatingStep3={creatingStep3}
				/>

				{
					creatingStep1 && <CreatingStep1
						data={props.data}
						currentStep={creatingStep1}
						nextStep={creatingStep2}
						setCurrentStep={setCreatingStep1}
						setNextStep={setCreatingStep2}
					/>
				}
				{
					creatingStep2 && <CreatingStep2
						data={props.data.step2}
						currentStep={creatingStep2}
						nextStep={creatingStep3}
						setCurrentStep={setCreatingStep2}
						setNextStep={setCreatingStep3}
					/>
				}
				{
					creatingStep3 && <CreatingStep3
						data={props.data.step3}
						currentStep={creatingStep3}
						nextStep={creatingStep1}
						setCurrentStep={setCreatingStep3}
						setNextStep={setCreatingStep1}
						isActive={props.isActive}
						setCreatingPopup={props.setCreatingPopup}
					/>
				}
			</div>
		</div>
	);
}