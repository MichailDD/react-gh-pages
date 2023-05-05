import React from "react";
import './HeroSlider.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination } from "swiper";
import "swiper/css/effect-cards";

export function HeroSlider(props) {

	let listSlides = props.slides.map((elem, index) => (
		<SwiperSlide key={index}>
			<img src={elem.img} alt={elem.title} loading="lazy" />
		</SwiperSlide>
	))

	return (<>
		<Swiper
			effect={"cards"}
			cardsEffect={{
				rotate: false,
				perSlideOffset: 29,
			}}
			pagination={{
				clickable: true
			}}
			modules={[EffectCards, Pagination]}
			className="hero-slider"
		>
			{listSlides}
		</Swiper>
	</>);
}