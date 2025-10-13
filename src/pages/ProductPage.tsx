import { useState } from 'react';
import { Star, Heart, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Product } from '../types';
import { products } from '../data/mockData';
import WhatsAppButton from '../components/WhatsAppButton';

interface ProductPageProps {
  product: Product;
  onNavigate: (page: string, data?: any) => void;
}

const mockReviews = [
  {
    id: '1',
    customer_name: 'Priya S.',
    rating: 5,
    title: 'Excellent Quality!',
    comment: 'The best quality I have found. Fresh and pure. Highly recommended!',
    verified_purchase: true,
    created_at: '2025-09-20',
  },
  {
    id: '2',
    customer_name: 'Rahul M.',
    rating: 5,
    title: 'Worth every penny',
    comment: 'Amazing product. You can taste the difference in quality.',
    verified_purchase: true,
    created_at: '2025-09-18',
  },
  {
    id: '3',
    customer_name: 'Sneha K.',
    rating: 4,
    title: 'Very good',
    comment: 'Great product. Delivery was prompt and packaging was excellent.',
    verified_purchase: false,
    created_at: '2025-09-15',
  },
];

export default function ProductPage({ product, onNavigate }: ProductPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'description' | 'nutritional' | 'ingredients' | 'reviews'>('description');

  const relatedProducts = products
    .filter((p) => p.category_id === product.category_id && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => onNavigate('shop')}
          className="flex items-center text-gray-600 hover:text-green-600 mb-6"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Shop
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="relative mb-4 bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={product.images[currentImageIndex]?.image_url}
                alt={product.images[currentImageIndex]?.alt_text}
                className="w-full h-[500px] object-cover"
              />
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setCurrentImageIndex(
                        (currentImageIndex - 1 + product.images.length) %
                          product.images.length
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full hover:bg-opacity-100"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentImageIndex(
                        (currentImageIndex + 1) % product.images.length
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full hover:bg-opacity-100"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((img, index) => (
                  <button
                    key={img.id}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`border-2 rounded-lg overflow-hidden ${
                      index === currentImageIndex
                        ? 'border-green-600'
                        : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={img.image_url}
                      alt={img.alt_text}
                      className="w-full h-24 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-sm text-green-600 font-medium mb-2">
                {product.category?.name}
              </div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">
                    {product.rating} ({product.review_count} reviews)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl font-bold text-green-700">
                  ₹{product.price}
                </span>
                {product.compare_at_price && (
                  <>
                    <span className="text-xl text-gray-500 line-through">
                      ₹{product.compare_at_price}
                    </span>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-semibold">
                      Save ₹{product.compare_at_price - product.price}
                    </span>
                  </>
                )}
              </div>

              <p className="text-gray-700 mb-6">{product.short_description}</p>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-medium">SKU:</span>
                  <span className="text-gray-600">{product.sku}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Stock:</span>
                  <span
                    className={`${
                      product.stock_quantity > 10
                        ? 'text-green-600'
                        : 'text-orange-600'
                    }`}
                  >
                    {product.stock_quantity > 0
                      ? `${product.stock_quantity} in stock`
                      : 'Out of stock'}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <WhatsAppButton
                  productName={product.name}
                  className="w-full py-4 px-6 rounded-lg text-lg"
                >
                  Order on WhatsApp
                </WhatsAppButton>
              </div>

              <div className="flex gap-4">
                <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors">
                  <Heart className="w-5 h-5" />
                  Add to Wishlist
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="border-b mb-6">
            <div className="flex gap-8">
              <button
                onClick={() => setActiveTab('description')}
                className={`pb-4 font-semibold transition-colors ${
                  activeTab === 'description'
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('nutritional')}
                className={`pb-4 font-semibold transition-colors ${
                  activeTab === 'nutritional'
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                Nutritional Info
              </button>
              <button
                onClick={() => setActiveTab('ingredients')}
                className={`pb-4 font-semibold transition-colors ${
                  activeTab === 'ingredients'
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                Ingredients
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`pb-4 font-semibold transition-colors ${
                  activeTab === 'reviews'
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                Reviews ({product.review_count})
              </button>
            </div>
          </div>

          <div>
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>
            )}

            {activeTab === 'nutritional' && (
              <div>
                {product.nutritional_info ? (
                  <table className="w-full max-w-2xl">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 font-semibold">Nutrient</th>
                        <th className="text-left py-2 font-semibold">Per 100g</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(product.nutritional_info).map(([key, value]) => (
                        <tr key={key} className="border-b">
                          <td className="py-2">{key}</td>
                          <td className="py-2">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="text-gray-600">Nutritional information not available.</p>
                )}
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div>
                <p className="text-gray-700">{product.ingredients || 'No ingredients listed.'}</p>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                {mockReviews.map((review) => (
                  <div key={review.id} className="border-b pb-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold">{review.customer_name}</span>
                          {review.verified_purchase && (
                            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                              Verified Purchase
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">
                            {new Date(review.created_at).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    {review.title && (
                      <h4 className="font-semibold mb-1">{review.title}</h4>
                    )}
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}

                <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors">
                  Write a Review
                </button>
              </div>
            )}
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => (
                <div
                  key={relProduct.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={relProduct.images[0]?.image_url}
                    alt={relProduct.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2">
                      {relProduct.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg font-bold text-green-700">
                        ₹{relProduct.price}
                      </span>
                      {relProduct.compare_at_price && (
                        <span className="text-sm text-gray-500 line-through">
                          ₹{relProduct.compare_at_price}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => onNavigate('product', relProduct)}
                      className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
