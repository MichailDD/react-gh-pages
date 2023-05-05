import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import './UsersSlider.css';
import { UserCard } from "../../Main/ListUserCard/UserCard/UserCard";

export const UsersSlider = (props) => {
	let slides = props.userCardInfo.map(user => <SwiperSlide key={user.id}>
		<UserCard
			name={user.name}
			nickname={user.nickname}
			date={user.date}
			photo={user.photo}
		/>
	</SwiperSlide>);

	return (
		<div className="user-slider">
			<Swiper
				slidesPerView={5.1}
				spaceBetween={16}
				pagination={{
					type: "progressbar",
				}}
				modules={[Pagination]}
				className="users-slider"
			>
				{slides}
			</Swiper>
		</div>
	);
};
