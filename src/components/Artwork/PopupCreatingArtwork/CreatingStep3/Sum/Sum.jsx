import React, { useState } from "react";
import { InputSum } from "./InputSum/InputSum";
import s from './Sum.module.css';

export function Sum(props) {

	return (
		<div className={s.wrap}>
			<InputSum type="number"
				text="taste"
				value={1308.54}
			/>
		</div>
	);
}