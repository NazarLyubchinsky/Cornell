import React from 'react'
import s from './PanelSection.module.scss'

// img
import Image from 'next/image'
import PanelImg from '../../assets/MainPage/PanelSection/PanelSection__img.png'
import PanelItemImg from '../../assets/MainPage/PanelSection/PanelItemImg.png'

import PanelSectionMobile from './PanelSectionMobile/PanelSectionMobile'


const PanelSection = () => {




	return (
		<>
			<section className={s.grid__container}>
				<div className={s.grid__Item}>
					<Image className={s.item__img} src={PanelImg} alt="Зображення 1" />
				</div>
				<div className={s.grid__Item}>
					<div className={s.img}>
						<Image src={PanelItemImg} alt='PanelItemImg' />
					</div>
					<div className={s.info}>
						<h2 className={s.info__title}>Cornell Hotel de France</h2>
						<p className={s.info__text}>Originally built in 1910, Cornell Hotel de France perfectly blends elegant French Colonial architecture with the modern comforts of a boutique Bed  Breakfast. The hallways on each floor feature fine prints from a different avant-garde artist including Modigliani, Matisse, Chagall, Gauguin, and Toulouse Lautrec, with the first floor dedicated to Jeanne D’Arc. Each room is individually decorated to give guests their own unique taste of European hospitality.</p>
					</div>
				</div>
				<div className={s.grid__Item}>
					<div className={s.img}>
						<Image src={PanelItemImg} alt='PanelItemImg' />
					</div>
					<div className={s.info}>
						<h2 className={s.title}>About</h2>
						<p className={s.text}>Cornell Hotel de France strives to deliver the exact experience you would get at a hotel on the Rive gauche in Paris. Built by architect A.W. Pattiani in 1910, the building was registered at the National Register of Historic Places as part of the “Lower Nob Hill Apartment Hotel District." Over the years, it has seen extensive renovations to provide greater accessibility and modern comfort while keeping intact its signature romantic Victorian architecture.</p>
					</div>
				</div>
				<div className={s.grid__Item}>
					<Image className={s.item__img} src={PanelImg} alt="Зображення 2" />
				</div>
				<div className={s.grid__Item}>
					<Image className={s.item__img} src={PanelImg} alt="Зображення 3" />
				</div>
				<div className={s.grid__Item}>
					<div className={s.img}>
						<Image src={PanelItemImg} alt='PanelItemImg' />
					</div>
					<div className={s.info}>
						<h2 className={s.title}>Location</h2>
						<p className={s.text}>Cornell is located in the neighborhood of Nob Hill right by Union Square, the bustling commercial hub of downtown San Francisco. It is also only 11 miles from the Moscone Conference Center, making it a great place to relax for conference attendees. Nob Hill is a renowned luxury destination in San Francisco, known for its many high-end hotels and historic architecture that dates back to the early 20th century. The neighborhood is home to a host of Michelin-starred restaurants and boutique shops, as well as art galleries and historic landmarks, so there is always something to do or see. From the classic architecture to the prestigious luxury shops, Nob Hill delivers the best of what “Old” San Francisco has to offer.</p>
					</div>
				</div>
			</section>

			{/* mobile */}
			<PanelSectionMobile />
		</>
	)
}

export default PanelSection
















