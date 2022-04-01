import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Cart from  './components/Cart/Cart';
import CourseDetails from './components/CourseDetails/CourseDetails';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Wishlist from './components/Wishlist/Wishlist';
import './App.css';

function App() : JSX.Element{
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/course" element={<CourseDetails/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
