import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4"
                style={{ marginBottom: '0' }}>
              <button
              onClick={() => onNavigate('home')}
            >
            <img
            src="https://ik.imagekit.io/fhzl3efmm/Farming-Logo.png?updatedAt=1751604987813"
            alt="Organic Living"
            className=""
            style={{ width: '150px', height: 'auto' }}
          />
              </button>
            </h3>
            <p className="text-sm mb-4">
              Premium organic products for a healthier, more sustainable lifestyle. Committed to quality, purity, and environmental responsibility.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/garudaorganic" target="_blank" className="hover:text-green-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/garudaorganic" target="_blank" className="hover:text-green-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/garudaorganic" target="_blank" className="hover:text-green-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" className="hover:text-green-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('shop')} className="hover:text-green-500 transition-colors">
                  Shop
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-green-500 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('farm')} className="hover:text-green-500 transition-colors">
                  Our Farm
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-green-500 transition-colors">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-green-500 transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Policies</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('privacy')} className="hover:text-green-500 transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('refund')} className="hover:text-green-500 transition-colors">
                  Refund & Return Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('shipping')} className="hover:text-green-500 transition-colors">
                  Shipping Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('terms')} className="hover:text-green-500 transition-colors">
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe to get special offers and updates</p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 95377 87871</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>garudaorganic33@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Ahmedabad, Gujarat, India</span>
            </div>
          </div>
          <div className="text-center mt-8 text-sm">
            <p>&copy; 2025 Garuda Organic. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
