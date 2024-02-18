import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Container, PostCard} from '../components';
import databaseService from '../appwrite/config';


function YourProfile() {
  const [posts, setPosts] = useState(null);
  const authStatus = useSelector(state => state.auth.status);
  const userData = useSelector(state => state.auth.userData);

  useEffect(() => {
    if( authStatus && userData )  {
      databaseService.getPosts()
      .then((posts) => {
        if(posts) setPosts(posts.documents);
      });
    }
  }, [userData, authStatus]);


  return posts ? (
    <Container className='text-white bg-black w-full py-4 my-4 text-left'>
      <h2 className='text-3xl m-5 '>Your Profile</h2>
      <h3 className='text-2xl'>Hello!, {userData.name} How are You?</h3>
      <h4>Your Posts</h4>
      {posts.map((post) => ((post && userData) && (post.userId === userData.$id) ? 
        <div key={post.$id}>
          <PostCard {...post} />
        </div> : null
      ))}
    </Container>
  ) :  (
    <Container>
      <center className='text-3xl text-white bg-black items-center'>Plz add Post First</center>)
    </Container>
  )
}

export default YourProfile