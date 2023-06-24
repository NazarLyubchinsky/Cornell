import React from 'react'
import s from './SpecialsPost.module.scss'

// img
import Image from 'next/image'
import HeaderImg from '../../assets/SpecialsPost/Specials__header.png'
const index = () => {
	return (
		<>
			{/*

		//!
		//! цей код  при нажиманні на карточку SPECIALS
		//!

		  */}
			<section className={s.specials}>
				<div className={s.specials__top}>
					<Image src={HeaderImg} alt='HeaderImg' />
				</div>
				<div className={s.specials__bottom}>
					<div className={s.title}>
						<h3>BOOK DIRECT AND SAVE 10%</h3>
					</div>
					<div className={s.subtitle}>
						<p>Lorem ipsum dolor sit amet consectetur. Volutpat id fusce gravida mattis lacus. Gravida posuere.</p>
					</div>
					<div className={s.text}>
						Lorem ipsum dolor sit amet consectetur. Risus eu massa sed tellus tincidunt aliquet aliquam platea ultrices. Bibendum laoreet morbi dui a elit id nec in. Nec nec turpis diam praesent sit morbi. Nulla magna non tempor vel potenti sit amet. Habitant suspendisse velit sed amet. Purus egestas vitae at velit nunc etiam placerat ut. Ante turpis amet venenatis nulla euismod.
					</div>
					<div className={s.button}>
						<button className={s.btn}>Book now</button>
					</div>
				</div>

			</section>
		</>
	)
}

export default index