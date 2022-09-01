import { useState, useEffect} from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Create from './pages/Create';
import About from './pages/About';

import Header from './components/Header';
import Footer from './components/Footer';

import {Routes, Route} from 'react-router-dom';

function App() {

  const [logo, setLogo] = useState('The Pixeleers Logo');
  const [user, setUser] = useState(null);


  return (
    <div>
      <Header logo={logo} user={user} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/create" element={<Create />} />

        <Route path="/login" element={<Login />} />

        <Route path="/about" element={<About />} />

      </Routes>
    </div>
  );
}

export default App;

