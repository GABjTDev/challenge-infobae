import { Route } from 'wouter';
import Home from '../pages/Home';

const Routes = () => {
  return (
    <>
      <Route path="/" component={Home} />
      
      {/* Ruta privada protegida */}
      {/* <PrivateRoute path="/dashboard" component={Users} /> */}
    </>
  );
};

export default Routes;
