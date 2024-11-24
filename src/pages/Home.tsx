import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products, categories, collections } from '../data/products';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Latest Collections</h2>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full bg-orange-500 text-white">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button className="p-2 rounded-full bg-orange-500 text-white">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex items-center justify-center space-x-4 mb-16">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full ${
                category.active
                  ? 'bg-orange-500 text-white'
                  : 'bg-white border hover:bg-gray-50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {collections.map(collection => (
            <div key={collection.id} className="text-center">
              <div className="bg-gray-100 rounded-lg p-6 mb-2">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="font-semibold mb-1">{collection.name}</h3>
              <p className="text-sm text-gray-600">{collection.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg">
            See more ≫
          </button>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}