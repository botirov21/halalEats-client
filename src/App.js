import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/home/home';

export default  function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route  path="/"  element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}
