import React, { useState } from 'react'
import s from './footer.module.scss'
import Link from 'next/link'
import { useForm, Resolver } from "react-hook-form";

// Image
import Image from 'next/image';
import FooterLogo from '../../assets/Layouts/footer/FooterLogo.svg'
import Instagram from '../../assets/Layouts/footer/i-instagram.svg'
import Twitter from '../../assets/Layouts/footer/i-twitter.svg'
import FaceBook from '../../assets/Layouts/footer/i-fb.svg'

type FormValues = {
	Email: string;
};

const resolver: Resolver<FormValues> = async (values) => {
	return {
		values: !values.Email ? {} : values,
		errors: !values.Email
			? {
				Email: {
					type: "required",
					message: "Please supply your email address"
				}
			}
			: {}
	};
};
const Footer = () => {


	/**
	 * FORM
	 */
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormValues>({
		resolver: resolver
	});
	const onSubmit = handleSubmit((data) => alert(JSON.stringify(data)));



	return (
		<>
			<footer className={s.footer}>
				<Link href='/' className={s.footer__left}>
					<Image src={FooterLogo} alt="Cornell" />
				</Link>
				<div className={s.footer__center}>
					<form className={s.footer__center_registration} onSubmit={onSubmit}>
						<div>
							<input type={'email'}
								className={`${s.registration__input} ${errors?.Email ? s.error : ''}`}
								{...register("Email")}
								placeholder="Email"
							/>
							<p className={s.error}>{errors?.Email?.message}</p>
						</div>
						<button className={s.registration__button} type="submit">
							join our newsletter
						</button>
					</form>
					<ul className={s.footer__center_nav}>
						<li className={s.nav__item}>
							<Link className={s.nav__item_link} href="/Discover">
								DISCOVER
							</Link>
						</li>
						<Link className={s.nav__item_link} href="/Specials">
							SPECIALS
						</Link>
						<li className={s.nav__item}>
							<Link className={s.nav__item_link} href="/Blog">
								BLOG
							</Link>
						</li>
						<li className={s.nav__item}>
							<Link className={s.nav__item_link} href="/Amenities">
								AMENITIES
							</Link>
						</li>
						<li className={s.nav__item}>
							<Link className={s.nav__item_link} href="/History">
								HISTORY
							</Link>
						</li>
						<li className={s.nav__item}>
							<Link className={s.nav__item_link} href="/ContactUs">
								CONTACT
							</Link>
						</li>
						{/* <li>hotel polities</li> */}
					</ul>
					<div className={s.footer__center_copyright}>
						<p>© 2023. Cornell. All Rights Reserved</p>
					</div>
				</div>
				<div className={s.footer__right}>
					<div className={s.footer__right_wrapper}>
						<div>
							<ul>
								<Link href="tel:8057724437">805-772-4437</Link>
								<Link href="/">Cornell Hotel de France</Link>
								<Link href="https://www.google.com/maps?q=715+Bush+Street,+San+Francisco,+94108" target="_blank">715 Bush Street, San Francisco, 94108</Link>
							</ul>
						</div>
						<div className={s.footer__right_social}>
							<Link className={s.social__item} href="https://www.twitter.com" target="_blank"><Image src={Twitter} alt="Twitter" /></Link>
							<Link className={s.social__item} href="https://www.instagram.com" target="_blank"><Image src={Instagram} alt="Instagram" /></Link>
							<Link className={s.social__item} href="https://www.facebook.com" target="_blank"><Image src={FaceBook} alt="FaceBook" /></Link>
						</div>
					</div>
					<div className={s.footer__right_copyright}>
						<p>© 2023. Cornell. All Rights Reserved</p>
					</div>
				</div>

			</footer>
		</>
	)
}

export default Footer