import React from 'react';

function Search() {
  return (
    <div className="search m-3">
      <input type="text" className="w-full rounded-full bg-[#16181c] text-white px-4 py-2" placeholder="Search" />
    </div>
  );
}

function TrendingItem({ hashtag, posts }) {
  return (
    <div className="item p-3 hover:bg-gray-800 cursor-pointer px-3">
      <div className="text-sm text-gray-200">Trending in India</div>
      <div className="font-bold">#{hashtag}</div>
      <div className="text-sm text-gray-200">{posts} Posts</div>
    </div>
  );
}

function WhoToFollow({ imageSrc, name, handle }) {
  return (
    <div className="item p-3 items-center gap-2 flex justify-between hover:bg-gray-800 cursor-pointer">
      <div className="flex gap-3">
        <div className="p1"><img className="w-12 h-12" src={imageSrc} alt={name} /></div>
        <div className="p2 ">
          <div>{name}</div>
          <div className="text-gray-500">@{handle}</div>
        </div>
      </div>
      <div className="p3">
        <button className="bg-white text-black px-5 py-2 rounded-full font-bold">Follow</button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="third w-full bg-red-5044 hidden md:block px-4">
      <Search />
      <div className="whats sticky top-0 m-3 bg-[#16181c] w-full py-5 rounded-xl space-y-3">
        <h1 className="text-xl font-bold px-3">Whats Happening</h1>
        <TrendingItem hashtag="Orry" posts="40.2k" />
        <TrendingItem hashtag="Harry" posts="40.2k" />
        <TrendingItem hashtag="Sigma Course" posts="40.2k" />
        <TrendingItem hashtag="CodeWithHarry" posts="40.2k" />
      </div>

      <div className="who sticky top-[50vh] m-3 bg-[#16181c] w-full py-5 pb-12 rounded-xl space-y-1">
        <h1 className="text-xl font-bold px-3">Who To Follow</h1>
        <WhoToFollow imageSrc="https://pbs.twimg.com/profile_images/1652878800311427073/j0-3owJd_bigger.jpg" name="Vercel" handle="vercel" />
        <WhoToFollow imageSrc="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_bigger.png" name="React" handle="react" />
        <WhoToFollow imageSrc="https://pbs.twimg.com/profile_images/989513875124117504/UNMIb20k_bigger.jpg" name="Shad.js" handle="shad" />
        <div className="text-blue-600 px-3 cursor-pointer hover:underline my-5 mb-14 right-0">Show More</div>
      </div>

      <div className="terms sticky top-[85vh] m-3 text-xs text-gray-500 px-3 w-full py-5 space-y-1">
        <span className="hover:underline cursor-pointer mr-2">Terms of Service</span>
        <span className="hover:underline cursor-pointer mr-2">Privacy Policy</span>
        <span className="hover:underline cursor-pointer mr-2">Cookie Policy</span>
        <span className="hover:underline cursor-pointer mr-2">Accessibility</span>
        <span className="hover:underline cursor-pointer mr-2">Ads info</span>
        <span className="hover:underline cursor-pointer mr-2">More</span>
        <span className="hover:underline cursor-pointer mr-2">© 2024 X Corp.</span>
      </div>
    </div>
  );
}

export default Footer;
