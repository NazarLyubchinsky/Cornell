import React from 'react'
import s from './Discover.module.scss'
import title from '../../assets/discover/Frame 4820.svg'
//images
import Icon from '../../assets/Specials/Icon.svg'
import Image from 'next/image'
import HeaderImg from '../../assets/Discover/headerImg.png'
import icon from '../../assets/Discover/Icon.svg'
import PanelImg from '../../assets/Discover/bottomImg.png'

import DiscoverSectionMobile from './DiscoverSectionMobile/DiscoverSectionMobile'
//components

const Discover = () => {
	return (
		<>
			<section className={s.discover}>
				<div className={s.discover__top}>
					<Image src={HeaderImg} alt='HeaderImg' />
				</div>
				<div className={s.discover__center}>
					<div className={s.banner}>
						<Image src={icon} alt='icon' />
						<div className={s.banner__title}>See San Francisco in a Whole New Light</div>
						<div className={s.banner__subtitle}>
							In much the same fashion as Cornell Hotel de France, the neighborhood known as Nob Hill is a combination of the traditional and the modern. The historic Victorian architecture is juxtaposed with ever-growing restaurant, bar, and shopping scenes, while a diverse populace of affluent San Franciscans brings
							the city streets to life with a sense of community and a unique combination of cultures.
						</div>

					</div>
				</div>
				<div className={s.discover__bottom}>
					<div className={s.grid__Item}>
						<Image className={s.item__img} src={PanelImg} alt="Зображення 1" />
					</div>
					<div className={s.grid__Item}>
						<div className={s.info}>
							<h2 className={s.info__title}>Old San Francisco Meets Modern Sensibilities</h2>
							<p className={s.info__text}>This area was originally coveted by wealthy businessmen for their residences because of the sweeping views of the bay area that it offered. It remains one of the most desirable places in San Francisco to live and is well-known for its upscale hotels and ritzy retail establishments. Throughout this sophisticated and classic neighborhood,
								one can still find many hidden historic gems amongst the busy city streets and vibrant local markets.</p>
						</div>
					</div>
					<div className={s.grid__Item}>
						<div className={s.info}>
							<h2 className={s.info__title}>All That San Francisco Has to Offert</h2>
							<p className={s.info__text}>Nob Hill provides its residents and visitors a variety of shops and restaurants that are sure to hold anyone’s interest. Restaurants range from locally sourced mom-and-pop’s diners, to upscale fine dining establishments, and the growing nightlife scene and eclectic retail available make it a popular destination for people from all corners of San Francisco. What’s more, the condensed layout of the area means that you will
								always find what you need within walking distance, making the need for transportation obsolete.</p>
						</div>
					</div>
					<div className={s.grid__Item}>
						<Image className={s.item__img} src={PanelImg} alt="Зображення 1" />
					</div>
				</div>
			</section>
			<DiscoverSectionMobile />
		</>
	)
}

export default Discover