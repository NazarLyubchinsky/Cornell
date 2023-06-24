import React from 'react'
import s from './DiscoverSectionMobile.module.scss'



// 

import SwiperArrowPrev from '../../../assets/MainPage/PanelSection/PanelSection__prev.svg'
import SwiperArrowNext from '../../../assets/MainPage/PanelSection/PanelSection__next.svg'
// 
import Image from 'next/image'
import PanelItemImg from '../../../assets/MainPage/PanelSection/PanelItemImg.png'
import PanelImg from '../../../assets/Amenities/PanelItemImg .png'


// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/scss";
import "swiper/css/navigation";
// import "swiper/css/pagination";
// import 'swiper/scss/pagination';

const PanelSectionMobile = () => {
	const customNavigation = {
		nextEl: ".custom-swiper-button-next",
		prevEl: ".custom-swiper-button-prev",
	};
	return (
		<>
			<section className={s.mobile__container}>
				<div className={s.wrapper}>

					<div className={s.sliderWrapper}>
						<Swiper
							navigation={customNavigation}
							pagination={{ type: "fraction" }}
							modules={[Pagination]}
							className="swiper"
						>
							<SwiperSlide className={s.swiper__slide} >
								<div className={s.slide__top}>
									<Image src={PanelImg} alt="Зображення 2" />
									<Image src={PanelItemImg} alt='PanelItemImg' />
								</div>
								<div className={s.slide__bottom}>
									<h2 className={s.title}>Top of the Line Comfort</h2>
									<p className={s.text}>	You’ll get all your needs met when you stay at Cornell Hotel de France, so you can enjoy a worry-free rest while you are here. Pivate parking is available across from the hotel and we provide luggage storage during your stay. Complimentary WiFi is provided in all rooms and public areas. We are also a smoke-free and pet-free establishment for the comfort of our guests.</p>
								</div>
							</SwiperSlide>
							<SwiperSlide className={s.swiper__slide} >
								<div className={s.slide__top}>
									<Image src={PanelImg} alt="Зображення 2" />
									<Image src={PanelItemImg} alt='PanelItemImg' />
								</div>
								<div className={s.slide__bottom}>
									<h2 className={s.title}>Breakfast Service</h2>
									<p className={s.text}>A complimentary breakfast-to-go including pastries, juice, and fruit will be prepared for you at Café Jeanne d’Arc every day from 8.30am when you book on the website. Fresh coffee and tea from Peet’s Coffee is also available. If you require special dietary arrangements, please call Cornell Hotel de France at least 24 hours before check-in.</p>
								</div>
							</SwiperSlide>
							<SwiperSlide className={s.swiper__slide} >
								<div className={s.slide__top}>
									<Image src={PanelImg} alt="Зображення 2" />
									<Image src={PanelItemImg} alt='PanelItemImg' />
								</div>
								<div className={s.slide__bottom}>
									<h2 className={s.title}>The Gift of French Romance</h2>
									<p className={s.text}>Originally built in 1910, Cornell Hotel de France perfectly blends elegant French Colonial architecture with the modern comforts of a boutique Bed & Breakfast. The hallways on each floor feature fine prints from a different avant-garde artist including Modigliani, Matisse, Chagall, Gauguin, and Toulouse Lautrec, with the first floor dedicated to Jeanne D’Arc. Each room is individually decorated to give guests their own unique taste of European hospitality.</p>
								</div>
							</SwiperSlide>
							<SwiperSlide className={s.swiper__slide} >
								<div className={s.slide__top}>
									<Image src={PanelImg} alt="Зображення 2" />
									<Image src={PanelItemImg} alt='PanelItemImg' />
								</div>
								<div className={s.slide__bottom}>
									<h2 className={s.title}>Cornell Hotel de France</h2>
									<p className={s.text}>Originally built in 1910, Cornell Hotel de France perfectly blends elegant French Colonial architecture with the modern comforts of a boutique Bed & Breakfast. The hallways on each floor feature fine prints from a different avant-garde artist including Modigliani, Matisse, Chagall, Gauguin, and Toulouse Lautrec, with the first floor dedicated to Jeanne D’Arc. Each room is individually decorated to give guests their own unique taste of European hospitality.</p>
								</div>
							</SwiperSlide>
							<SwiperSlide className={s.swiper__slide} >
								<div className={s.slide__top}>
									<Image src={PanelImg} alt="Зображення 2" />
									<Image src={PanelItemImg} alt='PanelItemImg' />
								</div>
								<div className={s.slide__bottom}>
									<h2 className={s.title}>Cornell Hotel de France</h2>
									<p className={s.text}>Originally built in 1910, Cornell Hotel de France perfectly blends elegant French Colonial architecture with the modern comforts of a boutique Bed & Breakfast. The hallways on each floor feature fine prints from a different avant-garde artist including Modigliani, Matisse, Chagall, Gauguin, and Toulouse Lautrec, with the first floor dedicated to Jeanne D’Arc. Each room is individually decorated to give guests their own unique taste of European hospitality.</p>
								</div>
							</SwiperSlide>
							<div className={s.swiper__navigation}>
								<div id={s.btn_prev} className={`custom-swiper-button-prev`}>
									<Image src={SwiperArrowNext} alt='SwiperArrowNext' />
								</div>
								<div id={s.btn_next} className={`custom-swiper-button-next`}>
									<Image src={SwiperArrowPrev} alt='SwiperArrowPrev' />
								</div>
							</div>
						</Swiper>
					</div>
				</div>
			</section>
		</>
	)
}

export default PanelSectionMobile