"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <nav className="h-20 bg-purple-700 text-white flex justify-between items-center px-3">
      <div className="logo font-bold text-2xl">
        <Link href="/">BitLink</Link>
      </div>
      <ul className="hidden md:flex justify-center items-center gap-4 text-xl"> <Link className="hover:font-semibold" href="/"><li>Home</li></Link>
        <Link className="hover:font-semibold" href="/about"><li>About</li></Link>
        <Link className="hover:font-semibold" href="/shorten"><li>Shortener</li></Link>
        <Link className="hover:font-semibold" href="/contact"><li>Contact Us</li></Link>
        <li className="flex gap-3">
          <Link href="/shorten"> <button className="bg-purple-500 rounded-lg shadow-lg px-2 py-1 font-bold transform hover:scale-105 transition-transform duration-200">Try Now</button> </Link>
          <Link href="https://github.com/Vivek16-ops?tab=repositories"> <button className="bg-purple-500 rounded-lg shadow-lg px-2 py-1 font-bold transform hover:scale-105 transition-transform duration-200">GitHub</button> </Link>
        </li>
      </ul>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none"> <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button>
      </div>
      {menuOpen && (<div className="absolute top-20 left-0 w-full bg-purple-700 flex flex-col gap-4 text-xl p-3">
        <Link className="hover:font-semibold" href="/"><li>Home</li></Link>
        <Link className="hover:font-semibold" href="/about"><li>About</li></Link>
        <Link className="hover:font-semibold" href="/shorten"><li>Shortener</li></Link>
        <Link className="hover:font-semibold" href="/contact"><li>Contact Us</li></Link>
        <li className="flex gap-3">
          <Link href="/shorten"> <button className="bg-purple-500 rounded-lg shadow-lg px-2 py-1 font-bold transform hover:scale-105 transition-transform duration-200">Try Now</button> </Link>
          <Link href="https://github.com/Vivek16-ops?tab=repositories"> <button className="bg-purple-500 rounded-lg shadow-lg px-2 py-1 font-bold transform hover:scale-105 transition-transform duration-200">GitHub</button> </Link>
        </li>
      </div>)}
    </nav>
  )
}

export default Navbar