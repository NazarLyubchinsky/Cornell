import React, { useState } from 'react'
import s from './contactus.module.scss'


// img
import Image from 'next/image'
import contactTitle from '../../assets/ContactUs/ContactUs__title.svg'

import Form from '../../components/Form/Form'




const ContactUs = () => {

	return (
		<>
			<section className={s.background}>
				<div className={s.title}>
					<Image src={contactTitle} alt='contactTitle' />
				</div>
				<div>

				</div>
				<div className={s.contact}>
					<div className={s.contact__info}>
						<div className={s.contact__info_text}>
							<p>Phone</p>
							<p>+14154213154</p>
							<p>Address</p>
							<p>715 Bush Street, San Francisco, 94108</p>
						</div>
					</div>
					<iframe className={s.contact__map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41583.58665283108!2d23.46877098083496!3d49.35263752600823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473a4ea0486881a9%3A0x4f36a7de394df480!2z0KDQsNGE0ZbQvdC10YDRltGP!5e0!3m2!1suk!2sua!4v1685272121482!5m2!1suk!2sua" width="1200" height="600"
					></iframe>
				</div>
				<Form />
			</section>
		</>
	)
}

export default ContactUs





