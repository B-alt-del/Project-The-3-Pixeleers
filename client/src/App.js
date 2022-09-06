import { useState, useEffect} from 'react';
import { isAuthenticated } from './utilities/isAuthenticated';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Create from './pages/Create';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
import NeedAuthorization from './components/NeedAuthorization';
import {Routes, Route} from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import PXLS from './pages/PXLS';



function App() {

  const [logo, setLogo] = useState('The Pixeleers Logo');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = isAuthenticated();
    if (data) setUser(data);
    console.log(data)
  }, []);


  return (
    <div>
      <Header logo={logo} user={user} />

      <Routes>
        <Route path="/" element={<Home user= {user} />} />

        <Route path="/create" element={<NeedAuthorization>  <Create user = {user} />  </NeedAuthorization>} />

        <Route path="/PXLS" element= {<PXLS />} />

        <Route path="/dashboard" element={<NeedAuthorization>  <Dashboard user = {user} />  </NeedAuthorization>} />

        <Route path="/login" element={<NeedAuthorization>  <Login setUser = {setUser} />  </NeedAuthorization>} />

        <Route path="/about" element={<About />} />

      </Routes>
    </div>
  );
}

export default App;

