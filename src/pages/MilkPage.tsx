import { Check, Droplet, Heart, Award, Leaf, Shield, Sparkles } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';
import TestimonialSlider from '../components/TestimonialSlider';

interface MilkPageProps {
  onNavigate: (page: string) => void;
}

const milkTestimonials = [
  {
    id: '1',
    customer_name: 'Priya Sharma',
    customer_image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    comment: 'The A2 milk has made such a difference for my family. My kids love it and I feel good knowing they are drinking pure, organic milk.',
    location: 'Mumbai',
  },
  {
    id: '2',
    customer_name: 'Rajesh Kumar',
    customer_image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    comment: 'Best quality milk I have ever purchased. You can truly taste the freshness and purity in every sip.',
    location: 'Delhi',
  },
  {
    id: '3',
    customer_name: 'Ananya Desai',
    customer_image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    comment: 'My digestive issues have improved significantly after switching to A2 milk. Highly recommend!',
    location: 'Bangalore',
  },
  {
    id: '4',
    customer_name: 'Vikram Patel',
    rating: 5,
    comment: 'Daily delivery is always on time and the milk stays fresh. The subscription service is very convenient.',
    location: 'Pune',
  },
];

export default function MilkPage({ onNavigate }: MilkPageProps) {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex gap-3 mb-6">
                <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                  PREMIUM QUALITY
                </span>
                <span className="bg-green-700 text-white px-4 py-1 rounded-full text-sm font-bold">
                  A2 PROTEIN
                </span>
                <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  FRESH DAILY
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                A2 Gir Cow Milk
              </h1>

              <p className="text-xl text-gray-700 mb-2 font-semibold">
                Pure, Natural & Nutritious
              </p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Experience the goodness of authentic A2 milk from indigenous Gir cows.
                Rich in nutrients, easy to digest, and delivered fresh to your doorstep daily.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">100% Pure A2 Protein</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Indigenous Gir Cows</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">Fresh Daily Delivery</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <WhatsAppButton
                  pageType="milk"
                  message="Hello! I'm interested in ordering fresh A2 Gir Cow Milk."
                  className="px-6 py-3 rounded-lg text-base"
                > Order Fresh Milk on WhatsApp
                </WhatsAppButton>
                 
                <div className="text-left">
                  <div className="text-3xl font-bold text-green-700">₹120</div>
                  <div className="text-sm text-gray-600">per liter</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-3xl p-2">
                <img
                  src="https://ik.imagekit.io/fhzl3efmm/ALL/MILK%20PRODUCT%20PAGE/Main.jpg?updatedAt=1760072571106"
                  alt="Fresh A2 Milk"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Pure A2 Gir Cow Milk</h2>
            <div className="w-16 h-1 bg-green-600 rounded"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://ik.imagekit.io/fhzl3efmm/ALL/MILK%20PRODUCT%20PAGE/001.jpg?updatedAt=1760072571134"
                alt="Gir Cow Close-up"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://ik.imagekit.io/fhzl3efmm/ALL/MILK%20PRODUCT%20PAGE/003.jpg?updatedAt=1760072571086"
                  alt="Gir Cow in Field"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://ik.imagekit.io/fhzl3efmm/ALL/MILK%20PRODUCT%20PAGE/002.jpg?updatedAt=1760072571146"
                  alt="Gir Cow Portrait"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="col-span-2 relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://ik.imagekit.io/fhzl3efmm/ALL/MILK%20PRODUCT%20PAGE/004.jpg?updatedAt=1760072571200"
                  alt="Gir Cow Herd"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our A2 Gir Cow Milk?</h2>
            <p className="text-lg text-gray-600">
              Because it’s more than just milk — it’s pure nourishment straight from nature.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Droplet className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">100% Pure A2 Gir Cow Milk</h3>
              <p className="text-gray-600">
                Only from indigenous Gir cows that naturally produce A2 beta-casein protein
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">Hormone-Free & Chemical-Free</h3>
              <p className="text-gray-600">
                No artificial hormones, antibiotics, or chemical additives of any kind
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">Rich in Omega-3 & Beta Casein Protein</h3>
              <p className="text-gray-600">
                Naturally high in essential nutrients, vitamins, and healthy fats
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">Directly from Our Organic Farm</h3>
              <p className="text-gray-600">
                Farm-to-table freshness delivered within 24 hours of milking
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">Easier to Digest</h3>
              <p className="text-gray-600">
                A2 protein is gentler on the stomach and may reduce digestive discomfort
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">Superior Taste & Quality</h3>
              <p className="text-gray-600">
                Rich, creamy texture with authentic milk flavor that you can taste
              </p>
            </div>
          </div>
        </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" 
               style={{ marginTop: '40px' }}>
          <h2 className="text-4xl font-bold text-center mb-4">Nutritional Information</h2>
          <p className="text-center text-gray-600 mb-12">
            With Garuda Organic, you don’t just drink milk you embrace a healthier, more natural way of living.
          </p>
          <div className="grid md:grid-cols-1 gap-8" 
                style={{ margin: '0 auto', width: '100%', maxWidth: '50%' }}>
            

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-green-600 transition-colors">
                {/* <div className="bg-yellow-400 text-green-900 text-sm font-bold py-1 px-3 rounded-full inline-block mb-4">
                  MOST POPULAR
                </div> */}
                {/* <h3 className="text-2xl font-bold mb-4">15 Days Plan</h3>
                <div className="text-4xl font-bold text-green-700 mb-2">₹1,725 (₹115/ liter)</div>
                <p className="text-gray-600 mb-6">for 15 days (1 Liter daily)</p> */} 

              <div style={{ textAlign: 'center', fontWeight: '700' }}>
                Per 100ml serving (Approx value)
                </div>
              
                <table className="w-full text-left border-collapse mb-8">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 w-6"
                          style={{ textAlign: 'left' }}>
                        Energy
                      </td>
                      <td className="py-2"
                          style={{ textAlign: 'end' }}>191.2 kcal</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 w-6"
                           style={{ textAlign: 'left' }}>
                        Moisture
                      </td>
                      <td className="py-2"
                           style={{ textAlign: 'end' }}>83.9 %</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 w-6"
                          style={{ textAlign: 'left' }}>
                        Protein
                      </td>
                      <td className="py-2"
                          style={{ textAlign: 'end' }}>3.2 gm</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 w-6"
                           style={{ textAlign: 'left' }}>
                        Beta Casein A2
                      </td>
                      <td className="py-2"
                           style={{ textAlign: 'end' }}>1.2 gm</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 w-6"
                          style={{ textAlign: 'left' }}>
                        Total Fat
                      </td>
                      <td className="py-2"
                          style={{ textAlign: 'end' }}>5.6 gm</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 w-6"
                          style={{ textAlign: 'left' }}>
                        Carbohydrate
                      </td>
                      <td className="py-2"
                           style={{ textAlign: 'end' }}>7.3 gm</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 w-6"
                          style={{ textAlign: 'left' }}>
                        Sugar(Lactos)
                      </td>
                      <td className="py-2"
                           style={{ textAlign: 'end' }}>4.8 gm</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 w-6"
                          style={{ textAlign: 'left' }}>
                        Calcium
                      </td>
                      <td className="py-2"
                           style={{ textAlign: 'end' }}>110.5 gm</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 w-6"
                          style={{ textAlign: 'left' }}>
                        Vitamin A
                      </td>
                      <td className="py-2"
                           style={{ textAlign: 'end' }}>17.5 gm</td> 
                    </tr>
                  </tbody>
                </table>
              
              </div>


          </div>
        </div>
        
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Subscription Plans</h2>
          <p className="text-center text-gray-600 mb-12">
            Choose the perfect plan for your family's needs
          </p>
          <div className="grid md:grid-cols-3 gap-8 milk-sub">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-green-600 transition-colors">
              <h3 className="text-2xl font-bold mb-4">Sample 3 Days</h3>
              <div className="text-4xl font-bold text-green-700 mb-2">₹120</div>
              <p className="text-gray-600 mb-6">per 500ml bottle</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>3-Day Sample Plan</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Fresh daily delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Delivered daily 6 P.M. to 9 P.M.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Returnable glass bottles</span>
                </li>
              </ul>
              <WhatsAppButton
                pageType="milk"
                message="Hello! I'm interested in the Sample 3 Days milk subscription plan."
                className="w-full py-3 rounded-lg"
              >
                Start Your Milk Subscription
              </WhatsAppButton>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-green-600 transition-colors">
              {/* <div className="bg-yellow-400 text-green-900 text-sm font-bold py-1 px-3 rounded-full inline-block mb-4">
                MOST POPULAR
              </div> */} 
              <h3 className="text-2xl font-bold mb-4">15 Days Plan</h3>
              <div className="text-4xl font-bold text-green-700 mb-2">₹1,725 (₹115/ ltr)</div>
              <p className="text-gray-600 mb-6">for 15 days (1 Liter daily)</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>15 days Advance Plan</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>₹5 per liter savings</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Fresh daily delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Delivered daily 6 P.M. to 9 P.M.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Returnable glass bottles</span>
                </li>
              </ul>
              <WhatsAppButton
                pageType="milk"
                message="Hello! I'm interested in the 15 days Advance milk subscription plan."
                className="w-full py-3 rounded-lg"
              >
                Start Your Milk Subscription
              </WhatsAppButton>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-lg p-8 transform scale-105 shadow-xl"> 
              <div className="bg-yellow-400 text-green-900 text-sm font-bold py-1 px-3 rounded-full inline-block mb-4">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-4">Monthly Plan</h3>
              <div className="text-4xl font-bold mb-2">₹3,300 (₹110/ ltr)</div>
              <p className="text-green-100 mb-6">for 30 days (1 Liter daily)</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-white" />
                  <span>30 days Advance Plan</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-white" />
                  <span>₹10 per liter savings</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-white" />
                  <span>Fresh daily delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-white" />
                  <span>Delivered daily 6 P.M. to 9 P.M.</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-white" />
                  <span>Returnable glass bottles</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-white" />
                  <span>Premium support</span>
                </li>
              </ul>
              <WhatsAppButton
                pageType="milk"
                message="Hello! I'm interested in the Monthly milk subscription plan."
                className="w-full py-3 rounded-lg"
              >
                Start Your Milk Subscription
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 milk-condition">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Terms & Conditions</h2>
          <div className="text-gray-700 leading-relaxed milk-tearm">
            <p className="mb-3">
             The 3-day plan is available only for first time customer
            </p>
            <p className="mb-3">
              Advance payment is mandatory for 15 Day & 30 Day plan.
            </p>
            <p className="mb-3">
              The rate for Cash on Delivery plan will be ₹120/liter.
            </p>
            <p className="mb-3">
              If you want to increase or dercease the milk quantity, it will be mandatory to inform us before 4 pm.
            </p>
            <p className="mb-3">
              it will be mandatory to return the glass bottle the next day.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Milk Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img
              src="https://ik.imagekit.io/fhzl3efmm/gir2.jpg?updatedAt=1751604992718"
              alt="Fresh Milk"
              className="rounded-lg shadow-md w-full h-48 object-cover hover:scale-105 transition-transform"
            />
            <img
              src="https://ik.imagekit.io/fhzl3efmm/krishna.jpg?updatedAt=1751604992761"
              alt="Milk Bottle"
              className="rounded-lg shadow-md w-full h-48 object-cover hover:scale-105 transition-transform"
            />
            <img
              src="https://ik.imagekit.io/fhzl3efmm/gircow.jpg?updatedAt=1751604992750"
              alt="Cows"
              className="rounded-lg shadow-md w-full h-48 object-cover hover:scale-105 transition-transform"
            />
            <img
              src="https://ik.imagekit.io/fhzl3efmm/ALL/MILK03.jpg?updatedAt=1760072571469"
              alt="Milk Products"
              className="rounded-lg shadow-md w-full h-48 object-cover hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">What Our Customers Say</h2>
          <p className="text-center text-gray-600 mb-12">
            Real reviews from families who trust our A2 milk
          </p>
          <TestimonialSlider testimonials={milkTestimonials} autoPlay={true} interval={5000} />
        </div>
      </section>

      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Switch to A2 Milk?</h2>
          <p className="text-lg mb-8">
            Join thousands of families who have made the healthy choice
          </p>
          <WhatsAppButton
            pageType="milk"
            message="Hello! I'm interested in starting a milk subscription from your website."
            className="px-8 py-4 rounded-lg text-lg bg-white text-green-600 hover:bg-gray-100"
          >
            Start Your Milk Subscription
          </WhatsAppButton>
        </div>
      </section>
    </div>
  );
}
