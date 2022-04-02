import React from 'react';
import HomeIcon from '../images/home.png'; 
import SearchIcon from '../images/search.svg';
import DownloadIcon from '../images/download.svg';
import UserIcon from '../images/user.png';

const BottomNav = () => {
  return (
    <div>
      <div className="flex items-center justify-around bg-gray-900 fixed bottom-0 left-0 right-0 h-[52px] lg:hidden">
           <div>
             <img className="w-[20px]" src={HomeIcon} alt="home" />
           </div>
           <div>
             <img src={SearchIcon} alt="search" />
           </div>
           <div>
             <img src={DownloadIcon} alt="download" />
           </div>
           <div>
             <img src={UserIcon} alt="user" />
           </div>
       </div>
    </div>
  )
}

export default BottomNav