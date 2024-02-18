import React, { useEffect, useState } from 'react'
import databaseService from '../appwrite/config';
import { PostCard as Post, Container } from '../components';

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

function Home() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    databaseService.getPosts()
    .then((posts) => {
      if(posts) {
        console.log(posts);
        setPosts(posts.documents);
      }
    })
  }, []);
  return posts ? (
    <div className='posts'>
      <Container>
        <Posts/>
        {posts.map((post) => (
          <div key={post.$id} className=''>
            <Post post={post}/>
          </div>
        ))}
      </Container>
    </div>
  ) : (
    <Container>
      <center className='text-3xl text-white bg-black items-center'>Plz add Post First</center>)
    </Container>
  );
}

export default Home