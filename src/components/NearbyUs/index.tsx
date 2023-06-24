
import s from './NearbyUs.module.scss'

import React, { useState } from "react";
import Image from "next/image";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import iconTop from "../../assets/MainPage/NearbyUs/iconSwiper.svg";
import SwiperArrowPrew from '../../assets/MainPage/NearbyUs/SwiperArrowPrew.svg'
import SwiperArrowNext from '../../assets/MainPage/NearbyUs/SwiperArrowNext.svg'
import Link from "next/link";
import SwiperImage from "../../assets/MainPage/NearbyUs/ImgSwiper.png";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const NearbyUs = () => {
	const [activeIndex, setActiveIndex] = useState(-1);

	const customNavigation = {
		nextEl: ".custom-swiper-button-next",
		prevEl: ".custom-swiper-button-prev",
	};

	const slidesData = [
		{

			title: 'premier',
			image: SwiperImage,
			text: "Text for slide 1",
		},
		{
			title: 'deluxe',
			image: SwiperImage,
			text: "Text for slide 2",
		},
		{
			title: 'COZY',
			image: SwiperImage,
			text: "Text for slide 3",
		},
		{
			title: 'junior suite',
			image: SwiperImage,
			text: "Text for slide 4",
		},
		{
			title: 'deluxe',
			image: SwiperImage,
			text: "Text for slide 5",
		},
		{
			title: 'premier',
			image: SwiperImage,
			text: "Text for slide 6",
		},
	];

	return (
		<section className={s.background}>
			<div className={s.wrapper}>
				<div className={s.title}>
					<Image src={iconTop} alt="Icon" />
				</div>
				<div className={s.swiper__container}>
					<Swiper
						slidesPerView={4}
						spaceBetween={26}
						navigation={customNavigation}
						autoplay={{ delay: 4000 }}
						// pagination={{ type: "fraction" }}
						className={s.swiper}


						breakpoints={{
							320: {
								slidesPerView: 1,
							},
							768: {
								slidesPerView: 2,
							},
							992: {
								slidesPerView: 4,
							},
						}}
					>
						{slidesData.map((slide, index) => (
							<SwiperSlide
								key={index}
								className={s.swiper__slide}
								onMouseEnter={() => setActiveIndex(index)}
								onMouseLeave={() => setActiveIndex(-1)}
							>
								<div className={s.swiper__imageContainer}>
									<Image className={s.swiper__img} src={slide.image} alt="SwiperImage" />
									<div className={s.swiper__text}>
										<p>20</p>
										<p>Lorem ipsum dolor sit amet consectetur. Mauris pharetra ac.</p>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>

					<div className={s.swiper__navigation}>
						<div className={`custom-swiper-button-prev`}>
							<Image className={s.img__navigation} src={SwiperArrowPrew} alt='SwiperArrowPrew' />
						</div>
						<div className={`custom-swiper-button-next`}>
							<Image className={s.img__navigation} src={SwiperArrowNext} alt='SwiperArrowNext' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NearbyUs;
