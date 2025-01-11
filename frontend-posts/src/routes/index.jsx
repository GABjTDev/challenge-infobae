import { Route } from 'wouter';
import Home from '../pages/Home';
import Post from '../pages/Post';

const Routes = () => {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/post/:id" component={Post} />
      
      {/* Ruta privada protegida */}
      {/* <PrivateRoute path="/dashboard" component={Users} /> */}
    </>
  );
};

export default Routes;
