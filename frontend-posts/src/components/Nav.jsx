import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useAuth } from '../context/AuthContext';
import { Link } from 'wouter';

const Nav = () => {

  const { user, logout, login } = useAuth();

  const handleLogout = () => {
    window.google.accounts.id.disableAutoSelect();
    logout();
  };

  return (
    <div className='navbar'>
      <div className='container-main nav-container'>
        <Link to={'/'}>Home</Link>
          {
            user ?
              <>
                <Link to={'/users'}>Usuarios</Link>
                <button className='button-google' onClick={() => { handleLogout() }}>logout</button>
              </>
            :
            <div className='button-google'>
              <GoogleLogin
                onSuccess={credentialResponse => {
                  console.log(credentialResponse);
                  const decoded = jwtDecode(credentialResponse?.credential);
                  login(decoded);
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            </div>
          }
      </div>
    </div>
  )
}

export default Nav
