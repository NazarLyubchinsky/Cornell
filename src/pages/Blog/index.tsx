import React from 'react'
import s from './Blog.module.scss'
import Link from 'next/link'
//redux
import { useSelector } from 'react-redux'
//components
import Blog from "@/components/Blog"

// img
import Image from 'next/image'

import BlogHeader from '../../assets/Blog/Blog__header.png'
import Icon from '../../assets/Blog/Icon.svg'
import { selectBlog } from '@/store/features/Blog'


const index = () => {
	const blogs = useSelector(selectBlog)
	return (
		<>
			<section className={s.blog}>
				<div className={s.blog__top}>
					<Image src={BlogHeader} alt='HeaderImg' />
				</div>
				<div className={s.blog__center}>
					<div className={s.banner}>
						<Image className={s.banner__img} src={Icon} alt='Icon' />
						<div className={s.banner__title}>Explore San Francisco Luxury</div>
						<div className={s.banner__subtitle}>
							Discover what makes Cornell Hotel de France an
							iconic and irreplaceable fixture of San Francisco life. From the distinctive local culture to the hotel’s
							unmatched international appeal, the life of luxury has never looked as good
							as it does from the windows of this unforgettably romantic boutique hotel
						</div>
					</div>
					<div className={s.cards}>
						{blogs.map((blog:any) => {
							return(
								<Blog date={blog.date} text={blog.text} id={blog.id}></Blog>
							)
						})}	
					</div>
				</div>
				<div className={s.blog__bottom}>
					<ul className={s.item}>
						<li ><b>Archive</b></li>
						<li>April 2022</li>
						<li>March 2022</li>
						<li>February 2022</li>
						<li>January 2022</li>
						<li>December 2021</li>
					</ul>
					<ul className={s.item}>
						<li ><b>Category</b></li>
						<li>Lorem ipsum</li>
						<li>Lorem ipsum ipsum</li>
						<li>Lorem ipsum</li>
						<li>Lorem ipsum</li>
						<li>Lorem ipsum</li>
					</ul>
					<ul className={s.item}>
						<li ><b>Tags</b></li>
						<li>
							@candelightnapa @candlelight @candlelightnapa award winning bed and
							breakfast napa california calistoga candle candlelightinn candlelight inn Candlelight Inn Napa Valley classic
							bed and breakfast napa concierge directions to napa Downtown Napa fun hike hotel napa valley love napa b&b
							napa bed and breakfast napa hotel napa hotels napa inn napa river Napa Valley napa valley lodging napa valley
							marathon Napa Valley wine tours napa wine oxbow market places to stay place to stay sales on wines sonoma st.
							helena travel tripadvisor tripadvisor awards wine wine country wine tasting wine tours wine train yountville
						</li>
					</ul>
				</div>

			</section>
		</>
	)
}

export default index