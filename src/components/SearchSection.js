import React from 'react';
import SearchBar from '../images/search copy.svg';
import Mic from '../images/mic.svg';
import Genre from './Genre';

const SearchSection = () => {
  return (
    <div className="mx-4 lg:mx-36 h-screen">
      <div className="pt-8 pb-4 lg:pt-20 lg:pb-8">
        <div className="h-12 lg:h-16 border-2 border-slate-600 flex items-center justify-between">
          <img className="px-4 lg:px-8" src={SearchBar} alt="searc-bar" />
          <input type="text" className="w-4/5 h-8 lg:h-12 outline-none border-none bg-transparent text-slate-300" placeholder="Search by actor, title.." />
          <img className="px-4 lg:px-8 cursor-pointer" src={Mic} alt="mic" />
        </div>
      </div>
      <div>
        <h1 className="text-white font-bold text-lg mt-2">Browse by</h1>
        <div className="h-36 lg:h-24 flex justify-between items-center gap-1 lg:gap-0 flex-wrap mt-0 lg:mt-4">
          <div className="bg-slate-700 hover:bg-slate-600 w-[47%] lg:w-64 flex items-center justify-center cursor-pointer py-4 lg:py-8 rounded-sm">
            <p className="text-white font-semibold text-base tracking-wide">Movies</p>
          </div>
          <div className="bg-slate-700 hover:bg-slate-600 w-[47%] lg:w-64 flex items-center justify-center cursor-pointer py-4 lg:py-8 rounded-sm">
            <p className="text-white font-semibold tracking-wide">Amazon Originals</p>
          </div>
          <div className="bg-slate-700 hover:bg-slate-600 w-[47%] lg:w-64 flex items-center justify-center cursor-pointer py-4 lg:py-8 rounded-sm">
            <p className="text-white font-semibold tracking-wide">T V</p>
          </div>
          <div className="bg-slate-700 hover:bg-slate-600 w-[47%] lg:w-64 flex items-center justify-center cursor-pointer py-4 lg:py-8 rounded-sm">
            <p className="text-white font-semibold tracking-wide">Kids</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-white font-bold text-lg mt-2 lg:mt-8">Genres</h1> 
        <div className="mt-4">
          <Genre head="Drama" />
          <Genre head="Action and adventure" />
          <Genre head="Romance" />
          <Genre head="Comedy" />
          <Genre head="Thriller" />
          <div className="flex justify-between cursor-pointer border-t py-2 lg:py-4 border-slate-600">
            <p className="text-blue-500">See more</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchSection