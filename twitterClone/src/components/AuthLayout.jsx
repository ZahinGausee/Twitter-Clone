import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Logo } from '../components';

function AuthLayout({children, authentication = true }) {
  const authStatus = useSelector(state => state.auth.status);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if(authentication && authStatus !== authentication) {
      navigate("/login");
    } else if(!authentication && authStatus !== authentication) {
      navigate('/');
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);
  return loader ? (
    <center className='text-3xl text-center flex items-center justify-center bg-black w-full mt-[50vh]'><Logo className='w-16'/></center>
  ) : <>{children}</>;
}

export default AuthLayout