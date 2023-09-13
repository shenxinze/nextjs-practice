import Image from 'next/image'
import React from 'react'

const logoList = [
  { url: '/1.png', alt: 'Lama Dev' },
  { url: '/2.png', alt: 'Lama Dev' },
  { url: '/3.png', alt: 'Lama Dev' },
  { url: '/4.png', alt: 'Lama Dev' }
]
const Footer = () => {
  return (
    <div className='h-14 flex items-center justify-between'>
      <div>©2023 Lamamia. All rights reserved.</div>
      <div className='flex items-center gap-2'>
        {logoList.map(logo => <Image className='opacity-60 cursor-pointer' src={logo.url} alt={logo.alt} width={15} height={15} key={logo.url} />)}
      </div>
    </div>
  )
}

export default Footer