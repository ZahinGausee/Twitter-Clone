import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import databaseService from '../appwrite/config';
import { Container, PostForm } from '../components';

function EditPost() {
  const [post, setPost ] = useState(null);
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    if(slug) {
      databaseService.getPost(slug)
      .then((post) => {
        if(post) setPost(post);
      })
    } else {
      navigate("/");
    }
  }, [slug, navigate])
  
  return post ? (
    <Container>
      <PostForm post={post} />
    </Container>
  ) : (
    <Container>
      <center className='text-3xl text-white bg-black items-center'>Plz add Post First</center>)
    </Container>
  );
}

export default EditPost