import Image from 'next/image'
import placeholder from '@/assets/images/placeholder.png'
import React from 'react'

const Carousel = () => {
  return (
    <div className='flex gap-[14px]'>
        <Image
        width={340}
        height={425}
        alt='slider image'
        src={placeholder}
        />
        <Image
        width={340}
        height={337}
        alt='slider image'
        src={placeholder}
        />
        <Image
        width={340}
        height={425}
        alt='slider image'
        src={placeholder}
        />
        <Image
        width={340}
        height={337}
        alt='slider image'
        src={placeholder}
        />
    </div>
  )
}

export default Carousel
