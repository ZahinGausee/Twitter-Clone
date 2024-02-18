import React from 'react';
import Post from '../PostCard';
import { useSelector } from 'react-redux';

function TopBar() {
  const authStatus = useSelector(state => state.auth.status);
  return (
    <>
    <div class="top flex p-3 w-[40vw] sticky top-0 bg-black backdrop-blur-3xl opacity-80">
                <div class="absolute w-16 h-1 rounded-full bg-blue-500 bottom-0 left-[19%] z-10"></div>
                <div class="left bg-red-3001 w-1/2 flex justify-center font-bold text-lg">For You</div>
                <div class="right bg-green-3001 w-1/2 flex justify-center font-bold text-lg">Following</div>
                <div class="settings mx-2"><span class="material-symbols-outlined">
                        settings
                    </span></div>
    </div>
    </>
  );
}



function Container({children}) {
  return (
    <div className="second h-ful w-full p-6 border-[1px] border-x-gray-600 border-y-black">
      <TopBar />
      <div className="h-[1px] w-full bg-gray-700 my-4"></div>
      {children}
    </div>
  );
}

export default Container;
