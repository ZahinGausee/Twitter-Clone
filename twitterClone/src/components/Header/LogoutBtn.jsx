import React from 'react'
import authService from '../../appwrite/auth';
import { logout as storeLogout } from '../../store/authSlice';
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function LogoutBtn({className = '', props}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    authService.logout()
    .then((status) => {
      if(status) {
        dispatch(storeLogout());
        navigate('/login');
      } else {
        navigate('/');
      }
    })
  }
  return (
    <button 
    onClick={logout}
    className={className}
    {...props}>
      Logout</button>
  )
}

export default LogoutBtn