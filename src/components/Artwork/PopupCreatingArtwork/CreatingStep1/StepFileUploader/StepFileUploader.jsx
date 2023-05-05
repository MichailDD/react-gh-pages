import React, { useRef } from "react";
import s from './StepFileUploader.module.css';

export function StepFileUploader(props) {
	let data = props.data;

	const hiddenFileInput = useRef(null);

	const handleClick = e => {
		hiddenFileInput.current.click();
	};
	const handleChange = e => {
		const fileUploaded = e.target.files[0];

		props.setCurrentStep(!props.currentStep);
		props.setNextStep(!props.nextStep);
	};

	return (
		<>
			<button className={s.btn}
				onClick={handleClick}
			>
				<p className={s.sizes}>
					{data.sizeFile}
				</p>
				<p className={s.text}>
					{data.text}
				</p>
			</button>
			<input type="file"
				ref={hiddenFileInput}
				onChange={handleChange}
				style={{ display: 'none' }}
			/>
		</>
	);
}