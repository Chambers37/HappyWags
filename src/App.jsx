import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Auth from './components/auth';
import Navbar from './components/navbar';
import './app.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default App;
