import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-violet-900 text-white py-2">
        <div className="logo ">
            <span className="font-bold text-xl mx-8">iTask</span>
        </div>
        <ul className="flex mx-9 gap-8">
            <li className="cursor-pointer hover:font-bold transition-all duration-300">Home</li>
            <li className="cursor-pointer hover:font-bold transition-all duration-300">Your Task</li>
        </ul>
    </nav>
  )
}

export default Navbar
