import React from 'react'

const MovieSlider = () => {
  return (
    <div className="mx-8 lg:mx-36">
      <div>
        <h1 className="text-white text-bold text-2xl">Latest Movies</h1>
      </div>
      <div className="bg-gray-400 h-72 flex gap-4 overflow-x-auto">
        <div className="h-56 w-96 bg-green-600 rounded-2xl cursor-pointer"></div>
        <div className="h-56 w-96 bg-green-600 rounded-2xl cursor-pointer"></div>
        <div className="h-56 w-96 bg-green-600 rounded-2xl cursor-pointer"></div>
        <div className="h-56 w-96 bg-green-600 rounded-2xl cursor-pointer"></div>
        
      </div>
    </div>
  )
}

export default MovieSlider