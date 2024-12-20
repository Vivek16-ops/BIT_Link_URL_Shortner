import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-20 bg-purple-700 text-white flex justify-between items-center px-3'>
      <div className="logo font-bold text-2xl">
        BITLink
      </div>
      <ul className='flex justify-center items-center gap-4 text-xl'>
        <Link className='hover:font-semibold' href={"/"}><li>Home</li></Link>
        <Link className='hover:font-semibold' href={"/about"}><li>About</li></Link>
        <Link className='hover:font-semibold' href={"/generate"}><li>Shortner</li></Link>
        <Link className='hover:font-semibold' href={"/contact"}><li>Contact Us</li></Link>
        <li className='flex gap-3'>
          <Link href={"/generate"}><button className="bg-purple-500 rounded-lg shadow-lg px-2 py-1 font-bold transform hover:scale-105 transition-transform duration-200"> Try Now </button></Link>
          <Link href={"https://github.com/Vivek16-ops?tab=repositories"}><button className="bg-purple-500 rounded-lg shadow-lg px-2 py-1 font-bold transform hover:scale-105 transition-transform duration-200"> GitHub </button></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar