import { useState } from 'react';
import { Star, SlidersHorizontal } from 'lucide-react';
import { products, categories } from '../data/mockData';
import { Product } from '../types';
import WhatsAppButton from '../components/WhatsAppButton';

interface ShopPageProps {
  onNavigate: (page: string, data?: any) => void;
  categoryFilter?: string;
}

export default function ShopPage({ onNavigate, categoryFilter }: ShopPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryFilter || 'all');
  const [sortBy, setSortBy] = useState<string>('featured');

  let filteredProducts = products;

  if (selectedCategory !== 'all') {
    const category = categories.find((c) => c.slug === selectedCategory);
    if (category) {
      filteredProducts = products.filter((p) => p.category_id === category.id);
    }
  }

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return b.is_featured ? 1 : -1;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-lg">100% Organic & Natural Products for Your Family</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5" />
                Filters
              </h3>

              <div className="mb-6">
                <h4 className="font-medium mb-3">Categories</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`block w-full text-left px-3 py-2 rounded ${
                      selectedCategory === 'all'
                        ? 'bg-green-100 text-green-700'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    All Products
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.slug)}
                      className={`block w-full text-left px-3 py-2 rounded ${
                        selectedCategory === cat.slug
                          ? 'bg-green-100 text-green-700'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-3">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                Showing {sortedProducts.length} product{sortedProducts.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={product.images[0]?.image_url}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    {product.compare_at_price && (
                      <span className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                        {Math.round(
                          ((product.compare_at_price - product.price) /
                            product.compare_at_price) *
                            100
                        )}
                        % OFF
                      </span>
                    )}
                    {product.stock_quantity < 10 && (
                      <span className="absolute top-4 left-4 bg-orange-500 text-white px-2 py-1 rounded text-sm font-semibold">
                        Low Stock
                      </span>
                    )}
                  </div>

                  <div className="p-4">
                    <div className="text-xs text-green-600 font-medium mb-1">
                      {product.category?.name}
                    </div>
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {product.rating} ({product.review_count})
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {product.short_description}
                    </p>

                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xl font-bold text-green-700">
                        ₹{product.price}
                      </span>
                      {product.compare_at_price && (
                        <span className="text-sm text-gray-500 line-through">
                          ₹{product.compare_at_price}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => onNavigate('product', product)}
                        className="flex-1 bg-gray-100 text-gray-700 py-2 rounded hover:bg-gray-200 transition-colors font-medium"
                      >
                        View Details
                      </button>
                      <WhatsAppButton
                        productName={product.name}
                        className="px-4 py-2 rounded text-sm"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No products found in this category.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
