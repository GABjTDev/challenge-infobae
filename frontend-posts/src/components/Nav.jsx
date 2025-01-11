import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useAuth } from '../context/AuthContext';

const Nav = () => {

  const { user, logout, login } = useAuth();

  const handleLogout = () => {
    window.google.accounts.id.disableAutoSelect();
    logout();
  };

  return (
    <div className='navbar'>
      <div className='container-main'>
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

      <button onClick={() => { handleLogout() }}>logout</button>
    </div>
  )
}

export default Nav
