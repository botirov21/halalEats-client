import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/home/home';
import Footer from './components/footer/footer';

export default  function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route  path="/"  element={<Home/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}
