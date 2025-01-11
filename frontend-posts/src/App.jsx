import { Router } from 'wouter';
import Routes from './routes';
import Nav from './components/Nav';
// import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes />
    </Router>
  );
};

export default App;