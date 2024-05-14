import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/home/home';
import Footer from './components/footer/footer';
import Mosques from './components/pages/mosques/mosque';

export default  function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route  path="/"  element={<Home/>} />
          <Route  path="/mosques"  element={<Mosques/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}
