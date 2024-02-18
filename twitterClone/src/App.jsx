import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import { useDispatch } from 'react-redux'
import { login, logout } from './store/authSlice';
import authService  from './appwrite/auth'
import { Header, Footer, Logo} from './components'
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData) {
        dispatch(login(userData));
      } else {
        dispatch(logout());
      }
    })
    .finally(() => setLoading(false));
  }, []);
  
  return !loading ? (
    <div className='flex md:container mx-auto my-5'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  ) : (
    <center className='text-3xl text-center flex items-center justify-center bg-black w-full mt-[50vh]'><Logo className='w-16'/></center>
  )
}

export default App
