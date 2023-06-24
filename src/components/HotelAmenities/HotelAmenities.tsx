import React from 'react'
import s from './HotelAmenities.module.scss'

// img
import Image from 'next/image'
import imgTop from '../../assets/MainPage/HotelAmenities/img__top.svg'
// import imgHotel from '../../assets/MainPage/HotelAmenities/Background.png'
// import imgHotel from '../../assets/MainPage/HotelAmenities/HotelAmenities_main.png'

import imgHotelIcon from '../../assets/MainPage/HotelAmenities/icon.svg'
import cardIcon from '../../assets/MainPage/HotelAmenities/cardIcon.svg'
import cardIcon2 from '../../assets/MainPage/HotelAmenities/cardIcon2.svg'
import cardIcon3 from '../../assets/MainPage/HotelAmenities/cardIcon3.svg'
import cardIcon4 from '../../assets/MainPage/HotelAmenities/cardIcon4.svg'

const HotelAmenities = () => {
	return (
		<>
			<section className={s.background}>
				<div className={s.container}>
					<div className={s.wrapper}>
						<Image className={s.wrapper__Icon} src={imgHotelIcon} alt="hotel" />
						<p className={s.wrapper__text}>Hotel Amenities</p>
						<div className={s.card}>
							<div className={s.card__cards}>
								<Image src={cardIcon} alt="cardIcon" />
								<p>Complimentary WiFi</p>
								<p>In every room</p>
							</div>
							<div className={s.card__cards}>
								<Image src={cardIcon2} alt="cardIcon" />
								<p>Complimentary WiFi</p>
								<p>In every room</p>
							</div>
							<div className={s.card__cards}>
								<Image src={cardIcon3} alt="cardIcon" />
								<p>Complimentary WiFi</p>
								<p>In every room</p>
							</div>
							<div className={s.card__cards}>
								<Image src={cardIcon} alt="cardIcon" />
								<p>Complimentary WiFi</p>
								<p>In every room</p>
							</div>
							<div className={s.card__cards}>
								<Image src={cardIcon2} alt="cardIcon" />
								<p>Complimentary WiFi</p>
								<p>In every room</p>
							</div>
							<div className={s.card__cards}>
								<Image src={cardIcon3} alt="cardIcon" />
								<p>Complimentary WiFi</p>
								<p>In every room</p>
							</div>
						</div>

					</div>
				</div>
			</section>
		</>
	)
}

export default HotelAmenities