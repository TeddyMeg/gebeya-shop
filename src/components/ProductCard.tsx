import { Heart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext.tsx';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();
  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
    toast.success('Added to cart!');
  };

  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <button className="absolute top-4 right-4">
          <Heart className="h-6 w-6 text-gray-600" />
        </button>
        <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm">
          In Stock
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">{product.category}</span>
          <span className="text-sm text-orange-500">★ {product.rating} rating</span>
        </div>
        <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">${product.price}</span>
          <button 
            onClick={addToCart}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}