import { Minus, Plus, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartPageProps {
  onNavigate: (page: string) => void;
}

export default function CartPage({ onNavigate }: CartPageProps) {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some products to get started!</p>
          <button
            onClick={() => onNavigate('shop')}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Shopping Cart</h1>
          <p className="text-lg">{cart.length} item{cart.length !== 1 ? 's' : ''} in your cart</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Cart Items</h2>
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  Clear Cart
                </button>
              </div>

              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 border border-gray-200 rounded-lg"
                  >
                    <img
                      src={item.product.images[0]?.image_url}
                      alt={item.product.name}
                      className="w-24 h-24 object-cover rounded"
                    />

                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">
                            {item.product.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {item.product.category?.name}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-gray-400 hover:text-red-600 transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center border border-gray-300 rounded">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="p-2 hover:bg-gray-100"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-1 font-semibold">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="p-2 hover:bg-gray-100"
                            disabled={item.quantity >= item.product.stock_quantity}
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="text-right">
                          <div className="text-lg font-bold text-green-700">
                            ₹{(item.product.price * item.quantity).toFixed(2)}
                          </div>
                          <div className="text-sm text-gray-600">
                            ₹{item.product.price} each
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onNavigate('shop')}
                className="mt-6 text-green-600 hover:text-green-700 font-medium flex items-center gap-2"
              >
                ← Continue Shopping
              </button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">₹{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold text-green-600">
                    {cartTotal >= 999 ? 'FREE' : '₹50'}
                  </span>
                </div>
                {cartTotal < 999 && (
                  <div className="text-sm text-gray-600 bg-yellow-50 p-2 rounded">
                    Add ₹{(999 - cartTotal).toFixed(2)} more for free shipping!
                  </div>
                )}
                <div className="border-t pt-3 flex justify-between text-lg">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-green-700">
                    ₹{(cartTotal + (cartTotal >= 999 ? 0 : 50)).toFixed(2)}
                  </span>
                </div>
              </div>

              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2 mb-3">
                Proceed to Checkout
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="text-center text-sm text-gray-600">
                <p>Secure checkout with multiple payment options</p>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="font-semibold mb-3">We Accept</h3>
                <div className="grid grid-cols-3 gap-2">
                  <div className="border rounded p-2 text-center text-xs font-medium">UPI</div>
                  <div className="border rounded p-2 text-center text-xs font-medium">
                    Cards
                  </div>
                  <div className="border rounded p-2 text-center text-xs font-medium">
                    Wallet
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
