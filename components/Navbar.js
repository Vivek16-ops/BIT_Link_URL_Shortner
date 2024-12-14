import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-10 bg-purple-700 text-white flex justify-between items-center px-3'>
        <div className="logo font-bold text-lg">
            BITLink
        </div>
       <ul className='flex justify-center items-center gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Shortner</li>
        <li>Contact Us</li>
       </ul>
    </nav>
  )
}

export default Navbar
