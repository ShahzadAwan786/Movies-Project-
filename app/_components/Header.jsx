import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
   <header className='bg-[#48bbc5] w-full h-15 felx justify-between px-8'>
    <div className='flex justify-end p-5 gap-4 font-semibold '>
    <Link href='/' className=' hover:bg-[white] '>Home</Link>
    <Link href='/admin' className='hover:bg-[white]'>Admin</Link>
    </div>
   </header>
  )
}

export default Header


