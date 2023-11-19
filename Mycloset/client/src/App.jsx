import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Header from './components/Header'


export default function App() {
  return ( 
    <BrowserRouter>
    {/* header*/}
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="profile" element={<Profile />} />
      <Route path="sign-in" element={<Signin />} />
      <Route path="Sign-up" element={<Signup/>} />
    </Routes>
    </BrowserRouter>
  );
}
