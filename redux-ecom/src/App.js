import Navbar from './components/Navbar';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Header/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/product/:id" element={<Product/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
