import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Auth from './components/auth';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './app.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
