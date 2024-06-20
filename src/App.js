import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/home/home';
import Footer from './components/footer/footer';
import Mosques from './components/pages/mosques/mosque';
import MosqueDetail from './components/pages/mosques/mosqueDetail';
import Markets from './components/pages/markets/markets';
import MarketDetail from './components/pages/markets/marketDetail';

export default  function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route  path="/"  element={<Home/>} />
          <Route  path="/mosques"  element={<Mosques/>} />
          <Route  path="/mosqueDetail/:id"  element={<MosqueDetail/>} />
          <Route  path="/markets"  element={<Markets/>} />
          <Route  path="/marketDetail/:id"  element={<MarketDetail/>} />

      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}
