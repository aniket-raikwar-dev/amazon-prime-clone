import React from 'react'
import NoDownload from '../images/no-download.jpg';

const Download = () => {
  return (
    <div>
      <div className="mx-8 lg:mx-36 h-screen bg-[#0E171E]">
      <div>
        <h2 className="text-center text-white pt-12 text-xl lg:text-3xl font-bold tracking-wide">Downloads</h2>
        <div className="flex flex-col items-center">
          <img className="mt-40 lg:mt-12 w-52 lg:w-72" src={NoDownload} alt="download" />
          <h2 className="text-white font-bold text-lg lg:text-2xl tracking-wide">No videos downloaded</h2>
          <div className="flex items-center gap-4 mt-4">
            <p className="text-white font-light tracking-wide">Auto Downloads: <span className="font-bold">On</span></p>
            <div className="w-2 h-2 rounded-full bg-slate-700"></div>
            <p className="text-blue-500">Manage</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Download