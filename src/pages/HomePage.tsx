import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Check, Heart, Truck, Shield, Star } from 'lucide-react';
import { products, testimonials, blogPosts, categories } from '../data/mockData';
import WhatsAppButton from '../components/WhatsAppButton';
import TestimonialSlider from '../components/TestimonialSlider';

interface HomePageProps {
  onNavigate: (page: string, data?: any) => void;
}

const heroBanners = [
  {
    desktopImage: 'https://ik.imagekit.io/fhzl3efmm/ALL/Mail%20Banner.jpg?updatedAt=1760072571022',
    mobileImage: 'https://ik.imagekit.io/fhzl3efmm/ALL/Main%20banner%20Mobile%20size.jpg?updatedAt=1760072571174',
    title: 'Pure A2 Cow Milk',
    subtitle: 'Farm Fresh & 100% Organic',
    cta: 'Shop Now',
  },
  {
    desktopImage: 'https://ik.imagekit.io/fhzl3efmm/ALL/Home%20Banner3.jpg?updatedAt=1760072571199',
    mobileImage: 'https://ik.imagekit.io/fhzl3efmm/ALL/Mobile%20Size.jpg?updatedAt=1760072571155',
    title: 'Traditional Desi Ghee',
    subtitle: 'Made with Ancient Bilona Method',
    cta: 'Explore Products',
  },
  {
    desktopImage: 'https://ik.imagekit.io/fhzl3efmm/ALL/Artboard%201.jpg?updatedAt=1760072571299',
    mobileImage: 'https://ik.imagekit.io/fhzl3efmm/ALL/Artboard%202.jpg?updatedAt=1760072571222',
    subtitle: 'Pure, Natural & Unprocessed',
    cta: 'Discover More',
  },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % heroBanners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const featuredProducts = products.filter((p) => p.is_featured);

  return (
    <div className="min-h-screen">
      <section className="relative h-[600px] overflow-hidden mobile-banner">
        {heroBanners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentBanner ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={banner.desktopImage}
              alt={banner.title}
              className="hidden md:block w-full h-full object-cover desktop-banner"
            />
            <img
              src={banner.mobileImage}
              alt={banner.title}
              className="mobile-banner block md:hidden w-full h-full object-cover"
            />
            <button onClick={() => onNavigate('milk')} className="w-full h-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4">
                
               
                
              </div>
            </div>
            </button>
          </div>
        ))}

        <button
          onClick={() => setCurrentBanner((currentBanner - 1 + heroBanners.length) % heroBanners.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentBanner((currentBanner + 1) % heroBanners.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroBanners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentBanner ? 'bg-white w-8' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onNavigate(`shop-${category.slug}`)}
                className="group relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <img
                  src={category.image_url}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative" style={{ height: '700px' }}>
        <button onClick={() => onNavigate('milk')} className="w-full h-full">
          <img
            src="https://ik.imagekit.io/fhzl3efmm/ALL/Home%20page%20milk%20banner%201920X675.jpg?updatedAt=1760072571191"
            alt="Organic Living"
            className="hidden md:block absolute inset-0 w-full h-full object-cover"
          />
          <img
            src="https://ik.imagekit.io/fhzl3efmm/ALL/Milk%20Page%20main%20600X400.jpg?updatedAt=1760072571176"
            alt="Organic Living"
            className="mobile-banner block md:hidden absolute inset-0 w-full h-full object-cover"
          />
        </button>
      </section>

      <section className="py-16 bg-white" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={product.images[0]?.image_url}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  {product.compare_at_price && (
                    <span className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                      Sale
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
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
                    <span className="text-sm text-gray-600">({product.review_count})</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold text-green-700">₹{product.price}</span>
                    {product.compare_at_price && (
                      <span className="text-sm text-gray-500 line-through">
                        ₹{product.compare_at_price}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => onNavigate('product', product)}
                      className="flex-1 bg-gray-100 text-gray-700 py-2 rounded hover:bg-gray-200 transition-colors"
                    >
                      View Details
                    </button>
                    {/* <WhatsAppButton
                      pageType="other"
                      productName={product.name}
                      className="px-4 py-2 rounded text-sm"
                    /> */}
                    {product.slug !== 'organic-a2-cow-milk' && (
                      <WhatsAppButton
                        pageType="other"
                        productName={product.name}
                        className="px-4 py-2 rounded text-sm"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Experience Our Process</h2>
            <p className="text-lg text-gray-600">
              See how we bring nature's best from our farm to your table
            </p>
          </div>

          <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://ik.imagekit.io/fhzl3efmm/farm.mp4?updatedAt=1751605026863"
              title="Farm Process Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section> */}

      <section className="video-hero" aria-label="Our organic journey">
  <div className="video-container">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="hero-video"
      poster="https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    >
      <source 
        src="https://ik.imagekit.io/d9wcjrk9j/farm.mp4?updatedAt=1750160570610" 
        type="video/mp4" 
      />
      Your browser does not support the video tag.
    </video>
    <div className="video-overlay">
      <div className="container">
        <div className="video-content">
          <h2 className="video-title">From Farm to Your Table</h2>
          <p className="video-description">
            Experience the journey of our organic products from sustainable farms 
            to your family's table. Pure, natural, and responsibly sourced.
          </p>
          <button onClick={() => onNavigate('about')} className="w-full h-full">
          <a className="btn btn-primary">Learn Our Story</a>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">What Our Customers Say</h2>
          <p className="text-center text-gray-600 mb-12">
            Real experiences from our happy customers
          </p>
          <TestimonialSlider testimonials={testimonials} autoPlay={true} interval={5000} />
        </div>
      </section>

      <section className="py-16 bg-white" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Our Farm"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                At Garuda Organic, we believe in bringing you the purest and most natural dairy products
                straight from our farm to your table. Our journey started with a simple mission: to provide
                families with authentic, chemical-free, and nutritious food.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We follow traditional farming practices, treat our cows with love and care, and ensure
                every product meets the highest quality standards. Our A2 milk comes from indigenous
                Gir cows that are grass-fed and raised in a stress-free environment.
              </p>
              <button
                onClick={() => onNavigate('about')}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 grid-col" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">100% Organic</h3>
              <p className="text-gray-600">
                Certified organic products with no chemicals or preservatives
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Farm Fresh</h3>
              <p className="text-gray-600">
                Delivered fresh from our farm within 24 hours of production
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick and reliable delivery to your doorstep
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quality Assured</h3>
              <p className="text-gray-600">
                Rigorous quality checks and certifications
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Latest from Our Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <button
                key={post.id}
                onClick={() => onNavigate('blog-post', post)}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow text-left"
              >
                <img
                  src={post.featured_image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-green-600 mb-2">{post.category}</div>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <span className="text-green-600 font-medium hover:underline">
                    Read More →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg mb-8">
            Get exclusive offers, health tips, and farm updates delivered to your inbox
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
