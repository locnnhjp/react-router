import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Category from './Components/Category';
import Product from './Components/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
