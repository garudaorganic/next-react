import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import MilkPage from './pages/MilkPage';
import AboutPage from './pages/AboutPage';
import FarmPage from './pages/FarmPage';
import BlogPage from './pages/BlogPage';
import BlogPost1 from './pages/BlogPost1';
import BlogPost2 from './pages/BlogPost2';
import BlogPost3 from './pages/BlogPost3';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import {
  PrivacyPolicyPage,
  RefundPolicyPage,
  ShippingPolicyPage,
  TermsPage,
} from './pages/PolicyPages';
import { Product, BlogPost } from './types';

type PageType =
  | 'home'
  | 'shop'
  | 'shop-dairy-products'
  | 'shop-organic-food'
  | 'shop-ghee-oils'
  | 'shop-honey-natural'
  | 'product'
  | 'milk'
  | 'about'
  | 'farm'
  | 'blog'
  | 'blog-post'
  | 'contact'
  | 'cart'
  | 'privacy'
  | 'refund'
  | 'shipping'
  | 'terms';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);

  const handleNavigate = (page: string, data?: any) => {
    setCurrentPage(page as PageType);
    if (page === 'product' && data) {
      setSelectedProduct(data);
    }
    if (page === 'blog-post' && data) {
      setSelectedBlogPost(data);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'shop':
        return <ShopPage onNavigate={handleNavigate} />;
      case 'shop-dairy-products':
        return <ShopPage onNavigate={handleNavigate} categoryFilter="dairy-products" />;
      case 'shop-organic-food':
        return <ShopPage onNavigate={handleNavigate} categoryFilter="organic-food" />;
      case 'shop-ghee-oils':
        return <ShopPage onNavigate={handleNavigate} categoryFilter="ghee-oils" />;
      case 'shop-honey-natural':
        return <ShopPage onNavigate={handleNavigate} categoryFilter="honey-natural" />;
      case 'product':
        return selectedProduct ? (
          <ProductPage product={selectedProduct} onNavigate={handleNavigate} />
        ) : (
          <HomePage onNavigate={handleNavigate} />
        );
      case 'milk':
        return <MilkPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'farm':
        return <FarmPage />;
      case 'blog':
        return <BlogPage onNavigate={handleNavigate} />;
      case 'blog-post':
        if (!selectedBlogPost) {
          return <BlogPage onNavigate={handleNavigate} />;
        }
        if (selectedBlogPost.id === '1') {
          return <BlogPost1 post={selectedBlogPost} onNavigate={handleNavigate} />;
        }
        if (selectedBlogPost.id === '2') {
          return <BlogPost2 post={selectedBlogPost} onNavigate={handleNavigate} />;
        }
        if (selectedBlogPost.id === '3') {
          return <BlogPost3 post={selectedBlogPost} onNavigate={handleNavigate} />;
        }
        return <BlogPost1 post={selectedBlogPost} onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      case 'cart':
        return <CartPage onNavigate={handleNavigate} />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'refund':
        return <RefundPolicyPage />;
      case 'shipping':
        return <ShippingPolicyPage />;
      case 'terms':
        return <TermsPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
        <main className="flex-grow">{renderPage()}</main>
        <Footer onNavigate={handleNavigate} />
      </div>
    </CartProvider>
  );
}

export default App;
