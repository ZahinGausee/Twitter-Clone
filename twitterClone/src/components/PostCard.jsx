import React from 'react'
import { Link } from 'react-router-dom';
import databaseService from '../appwrite/config'

function PostCard({$id, featuredImage, title, content, ProfileImageSrc, name }) {
  return (
    <Link 
    to={`/post/${$id}`}
    className="post border-[1px] border-y-gray-600 border-x-0">
      <div className="flex">
        {ProfileImageSrc && <div className="image m-4">
          <img className="w-16" src={ProfileImageSrc} alt="" />
        </div>}
        <div className="content my-3">
          <span className="font-bold hover:underline cursor-pointer text-white">{title}</span>
          <span className="text-gray-500">@{name} · 6h </span>
          <div className="postimg m-2 ml-0">{content}</div>
          {imageContentSrc && <div className="postimg m-4 ml-0"><img className="rounded-xl" src={databaseService.getFilePreview(featuredImage)} alt="" /></div>}
          <div className="icons flex justify-between mx-4 my-4 text-sm text-gray-600">
            <div className="icon flex items-center justify-center hover:text-blue-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
              <span className="material-symbols-outlined">chat_bubble</span> 1k
            </div>
            <div className="icon flex items-center justify-center hover:text-green-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
              <span className="material-symbols-outlined">repeat</span> 1k
            </div>
            <div className="icon flex items-center justify-center hover:text-pink-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
              <span className="material-symbols-outlined">Favorite</span> 1k
            </div>
            <div className="icon flex items-center justify-center hover:text-blue-500 hover:bg-gray-900 hover:rounded-full p-1 hover:cursor-pointer">
              <span className="material-symbols-outlined">bar_chart</span> 1k
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard