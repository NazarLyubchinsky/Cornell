import React from 'react'
import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'
//styles

const BurgerMenu = () => {
  return (
    <>
        <div className='left-0 top-12'>
            <Menu width={'auto'}>
                <Link href={'/discover'}>discover</Link>
                <Link href={'/Specials'}>Specials</Link>
                <Link href={'/Blog'}>Blog</Link>
                <Link href={'/Rooms'}>Rooms</Link>
                <Link href={'/amenities'}>Amenities</Link>
                <Link href={'/history'}>History</Link>
                <Link href={'/ContactUs'}>Contact</Link>
            </Menu>
        </div>
    </>
  )
}

export default BurgerMenu