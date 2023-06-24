import React from 'react'
import s from './Specials.module.scss'

// img 
import Image from 'next/image'
import HeaderImg from '../../assets/Specials/HeaderImg.png'
import Icon from '../../assets/Specials/Icon.svg'
import cardImg1 from '../../assets/Specials/card__img1.png'
import cardImg2 from '../../assets/Specials/card__img2.png'
import cardImg3 from '../../assets/Specials/card__img3.png'

const index = () => {
	return (
		<>
			<section className={s.specials}>
				<div className={s.specials__top}>
					<Image src={HeaderImg} alt='HeaderImg' />
				</div>
				<div className={s.specials__bottom}>
					<div className={s.banner}>
						<Image className={s.banner__img} src={Icon} alt='Icon' />
						<div className={s.banner__title}>Get the Best Deals on Your Next Stay</div>
						<div className={s.banner__subtitle}>he good life gets even better when you save a little on your stay. Find a deal that
							works for you and get ready to experience the most romantic hotel in San Francisco
						</div>
					</div>
					<div className={s.cards}>
						<div className={s.card}>
							<Image className={s.card__img} src={cardImg1} alt='cardImg' />
							<div className={s.card__content}>
								<h4>BOOK DIRECT AND SAVE 10%</h4>
								<p>Lorem ipsum dolor sit amet consectetur. Pretium a congue sagittis amet.</p>
								<button>LEARN MORE</button>
							</div>
						</div>
						<div className={s.card}>
							<Image className={s.card__img} src={cardImg1} alt='cardImg' />
							<div className={s.card__content}>
								<h4>BOOK DIRECT AND SAVE 10%</h4>
								<p>Lorem ipsum dolor sit amet consectetur. Pretium a congue sagittis amet.</p>
								<button>LEARN MORE</button>
							</div>
						</div>
						<div className={s.card}>
							<Image className={s.card__img} src={cardImg1} alt='cardImg' />
							<div className={s.card__content}>
								<h4>BOOK DIRECT AND SAVE 10%</h4>
								<p>Lorem ipsum dolor sit amet consectetur. Pretium a congue sagittis amet.</p>
								<button>LEARN MORE</button>
							</div>
						</div>
						<div className={s.card}>
							<Image className={s.card__img} src={cardImg1} alt='cardImg' />
							<div className={s.card__content}>
								<h4>BOOK DIRECT AND SAVE 10%</h4>
								<p>Lorem ipsum dolor sit amet consectetur. Pretium a congue sagittis amet.</p>
								<button>LEARN MORE</button>
							</div>
						</div>
						<div className={s.card}>
							<Image className={s.card__img} src={cardImg1} alt='cardImg' />
							<div className={s.card__content}>
								<h4>BOOK DIRECT AND SAVE 10%</h4>
								<p>Lorem ipsum dolor sit amet consectetur. Pretium a congue sagittis amet.</p>
								<button>LEARN MORE</button>
							</div>
						</div>
						<div className={s.card}>
							<Image className={s.card__img} src={cardImg1} alt='cardImg' />
							<div className={s.card__content}>
								<h4>BOOK DIRECT AND SAVE 10%</h4>
								<p>Lorem ipsum dolor sit amet consectetur. Pretium a congue sagittis amet.</p>
								<button>LEARN MORE</button>
							</div>
						</div>
					</div>

				</div>
			</section>
		</>
	)
}

export default index