import React, { useEffect, useState } from 'react'
import databaseService from '../appwrite/config';
import { PostCard, Container } from '../components';

function AllPost() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    databaseService.getPosts([])
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
        {posts.map((post) => (
          <div key={post.$id} className=''>
            <PostCard post={post}/>
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

export default AllPost