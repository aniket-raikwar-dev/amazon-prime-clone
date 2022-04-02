import React from 'react';
import PrimeLogo from '../images/prime.png';

const Navbar = () => {
  return (
    <nav className="h-28 lg:h-20 bg-slate-800">
       <div className="mx-8 lg:mx-36 flex flex-wrap items-center justify-center lg:justify-between h-28 lg:h-20">
          <div className="mt-4 lg:mt-0">
            <img className="w-[60px] lg:w-24" src={PrimeLogo} alt="prime-video" />
          </div>
          <div className="flex w-full lg:w-96 justify-between">
            <h2 className="text-slate-400 text-sm lg:text-base font-semibold hover:text-white hover:border-b">Home</h2>
            <h2 className="text-slate-400 text-sm lg:text-base font-semibold hover:text-white hover:border-b">TV Shows</h2>
            <h2 className="text-slate-400 text-sm lg:text-base font-semibold hover:text-white hover:border-b">Movies</h2>
            <h2 className="text-slate-400 text-sm lg:text-base font-semibold hover:text-white hover:border-b">Kids</h2>
          </div>
       </div>
    </nav>
  )
}

export default Navbar