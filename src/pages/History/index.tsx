import React from 'react'
import s from './History.module.scss'

// img
import Image from 'next/image'
import HeaderImg from '../../assets/History/headerImg.png'
import CenterIcon from '../../assets/History/centerIcon.svg'
import icons from '../../assets/History/icons.png'
import icons2 from '../../assets/History/icons2.png'
import BottomImg from '../../assets/History/bottom__img.png'

import HistorySectionMobile from './HistorySectionMobile/HistorySectionMobile'
const index = () => {
	return (
		<>
			<section className={s.history}>
				<div className={s.history__top}>
					<Image src={HeaderImg} alt='HeaderImg' />
				</div>
				<div className={s.history__center}>
					<div className={s.banner}>
						<Image src={CenterIcon} alt='icon' />
						<div className={s.banner__title}>Lorem ipsum dolor sit amet consectetur</div>
						<div className={s.banner__subtitle}>
							Lorem ipsum dolor sit amet consectetur. Elementum enim morbi pellentesque risus.
							Enim nulla sit morbi lacus ullamcorper vestibulum. Aliquam auctor lacus ut sapien nisi cursus montes cras a.
							Id netus id congue et aliquam amet. Iaculis ornare magna ut faucibus tortor quam id viverra laoreet.
							Vitae ipsum mauris cursus placerat pharetra donec pulvinar euismod.
						</div>
					</div>
				</div>
				<div className={s.history__bottom}>
					<div className={s.grid__Item}>
						<Image className={s.item__img} src={BottomImg} alt="Зображення 1" />
					</div>
					<div className={s.grid__Item}>
						<div className={s.info}>
							<Image className={s.info__img} src={icons} alt='icons' />
							<h2 className={s.info__title}>Lorem ipsum dolor sit amet</h2>
							<p className={s.info__text}>Originally built in 1910, Cornell Hotel de France perfectly blends elegant French Colonial architecture with the modern comforts of a boutique Bed & Breakfast. The hallways on each floor feature fine prints from a different avant-garde artist including Modigliani, Matisse, Chagall, Gauguin, and Toulouse Lautrec, with the first floor dedicated to Jeanne D’Arc. Each room is individually decorated to give guests their own unique taste of European hospitality.</p>
						</div>
					</div>
					<div className={s.grid__Item}>
						<div className={s.info}>
							<Image className={s.info__img} src={icons2} alt='icons' />
							<h2 className={s.info__title}>Lorem ipsum dolor sit amet</h2>
							<p className={s.info__text}>Cornell Hotel de France strives to deliver the exact experience you would get at a hotel on the Rive gauche in Paris. Built by architect A.W. Pattiani in 1910, the building was registered at the National Register of Historic Places as part of the “Lower Nob Hill Apartment Hotel District." Over the years, it has seen extensive renovations to provide greater accessibility and modern comfort while keeping intact its signature romantic Victorian architecture.</p>
						</div>
					</div>
					<div className={s.grid__Item}>
						<Image className={s.item__img} src={BottomImg} alt="Зображення 2" />
					</div>
					<div className={s.grid__Item}>
						<Image className={s.item__img} src={BottomImg} alt="Зображення 3" />
					</div>
					<div className={s.grid__Item}>
						<div className={s.info}>
							<Image className={s.info__img} src={icons} alt='icons' />
							<h2 className={s.info__title}>Lorem ipsum dolor sit amet</h2>
							<p className={s.info__text}>Cornell is located in the neighborhood of Nob Hill right by Union Square, the bustling commercial hub of downtown San Francisco. It is also only 11 miles from the Moscone Conference Center, making it a great place to relax for conference attendees. Nob Hill is a renowned luxury destination in San Francisco, known for its many high-end hotels and historic architecture that dates back to the early 20th century. The neighborhood is home to a host of Michelin-starred restaurants and boutique shops, as well as art galleries and historic landmarks, so there is always something to do or see. From the classic architecture to the prestigious luxury shops, Nob Hill delivers the best of what “Old” San Francisco has to offer.</p>
						</div>
					</div>
					<div className={s.grid__Item}>
						<div className={s.info}>
							<Image className={s.info__img} src={icons2} alt='icons' />
							<h2 className={s.info__title}>Lorem ipsum dolor sit amet</h2>
							<p className={s.info__text}>Cornell is located in the neighborhood of Nob Hill right by Union Square, the bustling commercial hub of downtown San Francisco. It is also only 11 miles from the Moscone Conference Center, making it a great place to relax for conference attendees. Nob Hill is a renowned luxury destination in San Francisco, known for its many high-end hotels and historic architecture that dates back to the early 20th century. The neighborhood is home to a host of Michelin-starred restaurants and boutique shops, as well as art galleries and historic landmarks, so there is always something to do or see. From the classic architecture to the prestigious luxury shops, Nob Hill delivers the best of what “Old” San Francisco has to offer.</p>
						</div>
					</div>
					<div className={s.grid__Item}>
						<Image className={s.item__img} src={BottomImg} alt="Зображення 3" />
					</div>
				</div>
			</section>
			<HistorySectionMobile />
		</>
	)
}

export default index