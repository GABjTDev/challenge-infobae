import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useAuth } from '../context/AuthContext';
import { Link } from 'wouter';
import postUser from '../services/postUsers';

const Nav = () => {

  const { user, logout, login } = useAuth();

  const handleLogout = () => {
    window.google.accounts.id.disableAutoSelect();
    logout();
  };

  return (
    <div className='navbar'>
      <div className='container-main nav-container'>
        <Link to={'/'} className="link-nav">Home</Link>
          {
            user ?
              <>
                <Link className="link-nav" to={'/users'}>Usuarios</Link>
                <button className='link-nav button-google' onClick={() => { handleLogout() }}>logout</button>
              </>
            :
            <div className='button-google'>
              <GoogleLogin
                onSuccess={credentialResponse => {
                  const decoded = jwtDecode(credentialResponse?.credential);
                  postUser(decoded);
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
