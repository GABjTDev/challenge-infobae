import { Route } from 'wouter';
import Home from '../pages/Home';
import Post from '../pages/Post';
import Users from '../pages/Users';
import ProtectedRoute from './ProtectedRoute';

const Routes = () => {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/post/:id" component={Post} />
      
      {/* Ruta privada protegida */}
      <ProtectedRoute>
        <Route path="/users" component={Users} />
      </ProtectedRoute>
    </>
  );
};

export default Routes;
