import { useState } from 'react';
import { ChevronLeft, ChevronRight, Instagram, Twitter } from 'lucide-react';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';
import { CartItem } from '../types';

// Product details component for individual product pages
export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('32');
  const [selectedColor, setSelectedColor] = useState('pink');
  const { dispatch } = useCart();

  // Mock product data
  const product = {
    id: 2,
    name: "Burberry shine",
    brand: "FENDI",
    price: 150,
    originalPrice: 300,
    discount: "50%",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800",
    rating: "1k+",
    unitsLeft: 56,
    colors: ['pink', 'blue', 'red', 'black'],
    sizes: ['20', '25', '32', '37']
  };

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...product,
        quantity,
        description: product.name, // Assuming the product name as description for simplicity
        category: 'Fashion', // Assuming a category for simplicity
      } as CartItem
    });
    toast.success('Added to cart!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.name} view ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-gray-600">Brand: {product.brand}</p>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold">${product.price}</span>
            <span className="text-gray-500 line-through">${product.originalPrice}</span>
            <span className="text-green-500">-{product.discount}</span>
          </div>

          <div>
            <p className="text-gray-600">{product.unitsLeft} units left</p>
            <p className="text-orange-500">★ {product.rating} rating</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity:
            </label>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 border rounded-md"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 border rounded-md"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Size:
            </label>
            <div className="flex space-x-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-md ${
                    selectedSize === size
                      ? 'bg-purple-600 text-white'
                      : 'border hover:bg-gray-50'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Color:
            </label>
            <div className="flex space-x-2">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color ? 'border-purple-600' : 'border-transparent'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={addToCart}
              className="w-full bg-white border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50"
            >
              Add to cart
            </button>
            <button className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
              Buy now
            </button>
          </div>

          <div>
            <p className="text-green-600">Pickup & Pay on collection available</p>
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-2">Share this product</p>
            <div className="flex space-x-4">
              <button className="text-gray-600 hover:text-purple-600">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="text-gray-600 hover:text-purple-600">
                <Twitter className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-12">
        <div className="border-b">
          <nav className="flex space-x-8">
            <button className="border-b-2 border-orange-500 px-4 py-2 text-orange-500">
              Overview
            </button>
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700">
              Description
            </button>
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700">
              Warranty
            </button>
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700">
              Reviews
            </button>
          </nav>
        </div>
        <div className="py-6">
          <ul className="space-y-4 text-gray-600">
            <li>Available in a wide range of colors, patterns, and themes to appeal to kids.</li>
            <li>Rubber outsoles with good traction to prevent slips and falls.</li>
            <li>Built-in arch support to help maintain healthy foot development.</li>
            <li>Soft insoles and adequate padding to support growing feet.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}