import { Home } from '@/pages/Home/Home';
import { Cart } from '@/pages/Cart/Cart';
import { Product } from '@/pages/Product/Product';
import { Route, Routes } from 'react-router-dom';
import Layout from '@/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="product/:id" element={<Product />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
