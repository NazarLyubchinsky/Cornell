import React from 'react'
import s from './Amenities.module.scss'

// img
import Image from 'next/image'
import HeaderImg from '../../assets/Amenities/headerImg.png'
import icon from '../../assets/Amenities/Icon.svg'
import icons from '../../assets/Amenities/icons.png'
import icons2 from '../../assets/Amenities/icons2.png'
import PanelImg from '../../assets/Amenities/PanelItemImg .png'

// 
import AmenitiesSectionMobile from './AmenitiesSectionMobile/AmenitiesSectionMobile'



const Amenities = () => {
	return (
		<>
			<section className={s.amenities}>
				<div className={s.amenities__top}>
					<Image src={HeaderImg} alt='HeaderImg' />
				</div>
				<div className={s.amenities__center}>
					<div className={s.banner}>
						<Image src={icon} alt='icon' />
						<div className={s.banner__title}>Modern Comforts With a French Touch</div>
						<div className={s.banner__subtitle}>
							Cornell Hotel de France is an ideal destination for travelers looking for the comforts of a boutique Paris hotel right in the heart of San Francisco. From the classic dècor that pays homage to renowned European artists, to the top-of-the-line bath products provided by L'Occitane, every night spent here will be a night to remember.
						</div>

					</div>
				</div>
				<div className={s.amenities__bottom}>
					<div className={s.grid__Item}>
						<Image className={s.item__img} src={PanelImg} alt="Зображення 1" />
					</div>
					<div className={s.grid__Item}>
						<div className={s.info}>
							<Image className={s.info__img} src={icons} alt='icons' />
							<h2 className={s.info__title}>Top of the Line Comfort</h2>
							<p className={s.info__text}>You’ll get all your needs met when you stay at Cornell Hotel de France, so you can enjoy a worry-free rest while you are here. Pivate parking is available across from the hotel and we provide luggage storage during your stay. Complimentary WiFi is provided in all rooms and public areas. We are also a smoke-free and pet-free establishment for the comfort of our guests.</p>
						</div>
					</div>
					<div className={s.grid__Item}>
						<div className={s.info}>
							<Image className={s.info__img} src={icons2} alt='icons' />
							<h2 className={s.info__title}>Breakfast Service</h2>
							<p className={s.info__text}>A complimentary breakfast-to-go including pastries, juice, and fruit will be prepared for you at Café Jeanne d’Arc every day from 8.30am when you book on the website. Fresh coffee and tea from Peet’s Coffee is also available. If you require special dietary arrangements, please call Cornell Hotel de France at least 24 hours before check-in.</p>
						</div>
					</div>
					<div className={s.grid__Item}>
						<Image className={s.item__img} src={PanelImg} alt="Зображення 2" />
					</div>
					<div className={s.grid__Item}>
						<Image className={s.item__img} src={PanelImg} alt="Зображення 3" />
					</div>
					<div className={s.grid__Item}>
						<div className={s.info}>
							<Image className={s.info__img} src={icons} alt='icons' />
							<h2 className={s.info__title}>The Gift of French Romance</h2>
							<p className={s.info__text}>Cornell is located in the neighborhood of Nob Hill right by Union Square, the bustling commercial hub of downtown San Francisco. It is also only 11 miles from the Moscone Conference Center, making it a great place to relax for conference attendees. Nob Hill is a renowned luxury destination in San Francisco, known for its many high-end hotels and historic architecture that dates back to the early 20th century. The neighborhood is home to a host of Michelin-starred restaurants and boutique shops, as well as art galleries and historic landmarks, so there is always something to do or see. From the classic architecture to the prestigious luxury shops, Nob Hill delivers the best of what “Old” San Francisco has to offer.</p>
						</div>
					</div>
				</div>
			</section>
			<AmenitiesSectionMobile />
		</>
	)
}

export default Amenities