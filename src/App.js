import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import CarDetails from './pages/CarDetails'
import Product from './pages/Product';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about-us" element={<About/>} />
      <Route exact path="/car-details/:modelName/:price" element={<CarDetails/>}/>
      <Route exact path="/product" element={<Product/>}/>
    </Routes>
  );
}

export default App;
