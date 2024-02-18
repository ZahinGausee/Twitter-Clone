import React from 'react'
import { useSelector } from 'react-redux'

function UserProfile() {
    const userData = useSelector(state => state.auth.userData);
    
  return (
    <div class="userprofile w-full mx-auto align-middle justify-center hidden md:flex">
              <div
                  class="item p-3 items-center gap-5 justify-end mx-5 flex   hover:bg-gray-800 cursor-pointer rounded-full w-fit">

                  <div class="p1"><img class="w-12 h-12"
                          src="https://pbs.twimg.com/profile_images/1522060025854066688/IZs_lylH_bigger.png"
                          alt="vercel" /></div>
                  <div class="p2 ">
                      <div>Haris Ali Khan</div>
                      <div class="text-gray-500">@CodeWithHarry</div>
                  </div>

                  <div class="p3 text-2xl">
                      ...
                  </div>

              </div>
          </div>
  )
}

export default UserProfile