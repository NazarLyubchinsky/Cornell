import React from 'react'
import Image from 'next/image'
import s from './blog.module.scss'
import Link from 'next/link'
import BlogCard from '../../assets/Blog/BlogCard.png'

const Blog = (props:any) => {
    return (
        <>
            <div className={s.card}>
                <Image className={s.card__img} src={BlogCard} alt='BlogCard' />
                <div className={s.card__overlay}>
                    <div className={s.card__date}>{props.date}</div>
                    <p className={s.card__text}>{props.text}</p>
                    <Link className={s.card__link} href={`/Blog/${props.id}`}>Read more</Link>
                </div>
            </div>
        </>
    )
}

export default Blog