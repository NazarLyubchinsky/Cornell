import React from 'react'
import s from './Decoration.module.scss'

// img
import Image from 'next/image'
import ornamentTop from '../../assets/Decoration/ornament__top.svg'
import ornamentBottom from '../../assets/Decoration/ornament__bottom.svg'

const Decoration = () => {
	return (
		<>
		<section className={s.decorations}>
		<div className={s.wrapper}>
				<div className={s.wrapper__top}>
					<Image src={ornamentTop} alt='ornamentTop' />
				</div>
				<div className={s.wrapper__title}>Classic charm meets modern comforts</div>
				<div className={s.wrapper__text}>Enjoy the personal comfort of a San Francisco Bed & Breakfast with elegant architecture and fine art</div>
				<div className={s.wrapper__bottom}>
					<Image src={ornamentBottom} alt='ornamentBottom' />
				</div>
			</div>
		</section>
		</>
	)
}

export default Decoration