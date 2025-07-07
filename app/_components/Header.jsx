import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
   <header className='bg-[#48bbc5] w-full h-15'>
    <nav className='flex justify-end p-5 gap-4 font-semibold'>
    <Link href='/' className='active-bg hover:bg-white px-2 rounded'>Home</Link>
    <Link href='/admin' className='hover:bg-white px-2 rounded'>Admin</Link>
    </nav>
   </header>
  )
}

export default Header


