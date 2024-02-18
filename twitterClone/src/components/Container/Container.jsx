import React from 'react';
import Post from '../PostCard';
import { useSelector } from 'react-redux';

function TopBar() {
  const authStatus = useSelector(state => state.auth.status);
  return (
    <div className="top flex p-3 sticky top-0 bg-black backdrop-blur-3xl opacity-80">
      <div className="absolute w-16 h-1 rounded-full bg-blue-500 bottom-0 left-[19%] z-10"></div>
      {authStatus && <div>
        <div className="left bg-red-3001 w-1/2 flex justify-center font-bold text-lg">For You</div>
        <div className="right bg-green-3001 w-1/2 flex justify-center font-bold text-lg">Following</div>
        <div className="settings mx-2">
          <span className="material-symbols-outlined">settings</span>
        </div>
      </div>}
      {!authStatus && <div className='text-3xl text-white items-center'>Please Login to See/Add the Post </div>}
    </div>
  );
}

function Posts() {
  return (
    <div className="posts">
      <Post
        imageSrc="https://pbs.twimg.com/profile_images/1697299503198646273/GTnwCVUC_x96.jpg"
        name="Elon Musk"
        handle="ElonMusk"
        content="I spent $44 billion for this app and now Lizard boy just decided to hit copy and paste. It’s personal now. See you in the cage, Zuck."
      />
      <Post
        imageSrc="https://pbs.twimg.com/profile_images/1522060025854066688/IZs_lylH_bigger.png"
        name="CodeWithHarry"
        handle="CodeWithHarry"
        content="Living legend"
        imageContentSrc="https://pbs.twimg.com/media/GEGqnodacAAoyCO?format=jpg&name=900x900"
      />
      <Post
        imageSrc="https://pbs.twimg.com/profile_images/1724504100136439808/J8k8HnSD_bigger.png"
        name="non aesthetic things"
        handle="CodeMeme"
        content="This is amazing coding meme"
        imageContentSrc="https://s3.amazonaws.com/rails-camp-tutorials/blog/programming+memes/works-doesnt-work.jpg"
      />
      <Post
        imageSrc="https://pbs.twimg.com/profile_images/1522060025854066688/IZs_lylH_bigger.png"
        name="non aesthetic things"
        handle="PicturesFoIder"
        content="legend"
        imageContentSrc="https://pbs.twimg.com/media/GEGqnodacAAoyCO?format=jpg&name=900x900"
      />
    </div>
  );
}

function Container({children}) {
  return (
    <div className="second w-full p-6 border-[1px] border-x-gray-600 border-y-black">
      <TopBar />
      <div className="h-[1px] w-full bg-gray-700 mt-4"></div>
      {children}
    </div>
  );
}

export default Container;
