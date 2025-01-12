import { Router } from 'wouter';
import Routes from './routes';
import Nav from './components/Nav';
import Footer from './components/Footer';
// import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <Router>
      <div className='structured'>
        <Nav />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
};

export default App;