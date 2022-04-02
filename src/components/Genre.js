import React from 'react';
import RightArrow from '../images/chevron-right.svg';

const Genre = ({ head }) => {
  return (
    <div className="flex justify-between cursor-pointer border-t py-3.5 lg:py-4 hover:bg-slate-900 border-slate-600">
      <p className="text-slate-500 hover:text-blue-500">{head}</p>
      <img className="px-2" src={RightArrow} alt="arrow" />
    </div>
  )
}

export default Genre