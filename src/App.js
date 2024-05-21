import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/home/home';
import Footer from './components/footer/footer';
import Mosques from './components/pages/mosques/mosque';
import MosqueDetail from './components/pages/mosques/mosqueDetail';

export default  function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route  path="/"  element={<Home/>} />
          <Route  path="/mosques"  element={<Mosques/>} />
          <Route  path="/mosqueDetail/:id"  element={<MosqueDetail/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}
