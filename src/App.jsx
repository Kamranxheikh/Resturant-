import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Menu from './pages/Menu';
import Franchise from './pages/Franchise';
import About from './pages/About';
import Contact from './pages/Contact';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function App() {
    return (
      <>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/Menu/*" element={<Menu/>} />
        <Route path="/Franchise" element={<Franchise/>}/>
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
