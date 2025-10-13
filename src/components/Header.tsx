import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

  const categories = [
    { name: 'Dairy Products', slug: 'dairy-products' },
    { name: 'Organic Food Products', slug: 'organic-food' },
    { name: 'Ghee & Oils', slug: 'ghee-oils' },
    { name: 'Honey & Natural Products', slug: 'honey-natural' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-green-700 text-white py-2 text-center text-sm">
        Welcome to Garuda organic.
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => onNavigate('home')}
            className="text-2xl font-bold text-green-800 hover:text-green-600 transition-colors"
          >
            <img
            src="https://ik.imagekit.io/fhzl3efmm/Garuda-Logo.png?updatedAt=1751604987955"
            alt="Organic Living"
            className=""
            style={{ width: '150px', height: 'auto' }}
          />
          </button>

          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`${
                currentPage === 'home' ? 'text-green-700' : 'text-gray-700'
              } hover:text-green-600 transition-colors font-medium`}
            >
              Home
            </button>

            <div
              className="relative"
              onMouseEnter={() => setShopDropdownOpen(true)}
              onMouseLeave={() => setShopDropdownOpen(false)}
            >
              <button
                onClick={() => onNavigate('shop')}
                className={`${
                  currentPage === 'shop' ? 'text-green-700' : 'text-gray-700'
                } hover:text-green-600 transition-colors font-medium flex items-center gap-1`}
              >
                Shop <ChevronDown className="w-4 h-4" />
              </button>
              {shopDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-50">
                  {categories.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => {
                        onNavigate(`shop-${cat.slug}`);
                        setShopDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-700"
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => onNavigate('milk')}
              className={`${
                currentPage === 'milk' ? 'text-green-700' : 'text-gray-700'
              } hover:text-green-600 transition-colors font-medium`}
            >
              Milk
            </button>

            <button
              onClick={() => onNavigate('about')}
              className={`${
                currentPage === 'about' ? 'text-green-700' : 'text-gray-700'
              } hover:text-green-600 transition-colors font-medium`}
            >
              About Us
            </button>

            <button
              onClick={() => onNavigate('farm')}
              className={`${
                currentPage === 'farm' ? 'text-green-700' : 'text-gray-700'
              } hover:text-green-600 transition-colors font-medium`}
            >
              Our Farm
            </button>

            <button
              onClick={() => onNavigate('blog')}
              className={`${
                currentPage === 'blog' ? 'text-green-700' : 'text-gray-700'
              } hover:text-green-600 transition-colors font-medium`}
            >
              Blog
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className={`${
                currentPage === 'contact' ? 'text-green-700' : 'text-gray-700'
              } hover:text-green-600 transition-colors font-medium`}
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center">
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <button
              onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-gray-700 hover:text-green-600"
            >
              Home
            </button>
            <button
              onClick={() => { onNavigate('shop'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-gray-700 hover:text-green-600"
            >
              Shop
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => { onNavigate(`shop-${cat.slug}`); setMobileMenuOpen(false); }}
                className="block w-full text-left py-2 pl-4 text-gray-600 hover:text-green-600"
              >
                {cat.name}
              </button>
            ))}
            <button
              onClick={() => { onNavigate('milk'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-gray-700 hover:text-green-600"
            >
              Milk
            </button>
            <button
              onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-gray-700 hover:text-green-600"
            >
              About Us
            </button>
            <button
              onClick={() => { onNavigate('farm'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-gray-700 hover:text-green-600"
            >
              Our Farm
            </button>
            <button
              onClick={() => { onNavigate('blog'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-gray-700 hover:text-green-600"
            >
              Blog
            </button>
            <button
              onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }}
              className="block w-full text-left py-2 text-gray-700 hover:text-green-600"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
