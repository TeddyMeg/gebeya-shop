import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home.tsx';
import Cart from './pages/Cart.tsx';
import Checkout from './pages/Checkout.tsx';
import { CartProvider } from './context/CartContext';

function App() {
  const path = window.location.pathname;

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        {path === '/' && <Home />}
        {path === '/cart' && <Cart />}
        {path === '/checkout' && <Checkout />}
        <Toaster position="bottom-right" />
      </div>
    </CartProvider>
  );
}

export default App;