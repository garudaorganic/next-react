import { Award, Heart, Leaf, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://ik.imagekit.io/fhzl3efmm/ALL/About%20us%20copy.jpg?updatedAt=1760072571247)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-xl md:text-2xl">Our Journey to Purity & Tradition</p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4">
                To deliver pure, natural, and unadulterated nourishment by reviving India’s traditional dairy practices. At Garuda Organic, we’re committed to:
              </p>
              <ul>
              <li className="text-lg text-gray-700 mb-4">
                Ethical and loving care for our native Gir cows
              </li>
              <li className="text-lg text-gray-700 mb-4">
                Sustainable and eco-friendly farming practices
              </li>
              <li className="text-lg text-gray-700 mb-4">
                Fresh, farm-to-home milk delivery in glass bottles
              </li>
              <li className="text-lg text-gray-700 mb-4">
                Preserving tradition with bilona ghee churning
              </li>
                </ul>
              <p className="text-lg text-gray-700 mb-4">
                Every product we create carries honesty, authenticity, and the promise of health for your family.
              </p>
              <ul>
              <li className="text-lg text-gray-700 mb-4">
                🐄 100% Native Gir Cow A2 Milk
              </li>
              <li className="text-lg text-gray-700 mb-4">
                🥛 Daily Fresh Delivery
              </li>
              <li className="text-lg text-gray-700 mb-4">
                🌱 Eco-Friendly Practices
              </li>
              <li className="text-lg text-gray-700 mb-4">
                🔆 Rooted in Tradition
              </li>
                </ul>
            </div>
            <img
              src="https://ik.imagekit.io/fhzl3efmm/ALL/dfdsfg-4.jpg?updatedAt=1760072571220"
              alt="Our Mission"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">100% Organic</h3>
              <p className="text-gray-600">
                We follow certified organic farming practices with zero use of chemical pesticides
                or synthetic fertilizers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">Animal Welfare</h3>
              <p className="text-gray-600">
                Our cows are treated with love and care, roaming freely and living stress-free lives
                on our farm.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">Quality First</h3>
              <p className="text-gray-600">
                Every product undergoes rigorous quality checks to ensure you receive only the best.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">Community Focus</h3>
              <p className="text-gray-600">
                We support local farmers and contribute to building a sustainable food community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Certifications</h2>
            <p className="text-lg text-gray-600">
              We are proud to be certified by leading organic and quality assurance organizations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="text-green-600 font-bold text-lg mb-2">ORGANIC</div>
              <p className="text-sm text-gray-600">Certified Organic</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="text-green-600 font-bold text-lg mb-2">FSSAI</div>
              <p className="text-sm text-gray-600">Food Safety Certified</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="text-green-600 font-bold text-lg mb-2">ISO</div>
              <p className="text-sm text-gray-600">Quality Management</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="text-green-600 font-bold text-lg mb-2">A2 CERTIFIED</div>
              <p className="text-sm text-gray-600">Pure A2 Milk</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl">
                  2020
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">The Beginning</h3>
                <p className="text-gray-700">
                  During the challenging times of COVID, Garuda Organic began its journey with a small farm and a big dream—to revive the tradition of pure and organic living.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl">
                  2022
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Growing Trust</h3>
                <p className="text-gray-700">
                  With growing demand, we expanded to serve hundreds of families who sought chemical-free, natural products.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl">
                  2023
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Tradition Meets Innovation</h3>
                <p className="text-gray-700">
                  We introduced eco-friendly packaging and doorstep delivery to ensure freshness and authenticity every day.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl">
                  2024
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2"> Leading with Purity</h3>
                <p className="text-gray-700">
                  Today, Garuda Organic proudly serves thousands of households with Gir Cow A2 Milk, Ghee, and Wheat, trusted for health and rooted in tradition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Meet Our Founder & Visionary</h2>
          <p className="text-center text-gray-600 mb-12">
            The passionate people behind Garuda Organic
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="group text-center">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="https://ik.imagekit.io/fhzl3efmm/user.png?updatedAt=1752248009316"
                  alt="Founder"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  style={{ height: '30rem', objectFit: 'fill' }}
                />
                <div className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-20 transition-opacity" />
              </div>
              <h3 className="font-bold text-xl mb-1">Hiren Sojitra</h3>
              {/* <p className="text-green-600 font-medium mb-2">Founder & Visionary</p> */}
              {/* <p className="text-sm text-gray-600">
                Driven by passion for purity and authenticity, Hiren leads Garuda Organic’s mission of delivering natural dairy and cereal to every household.
              </p> */}
              <p className="text-sm text-gray-600">
               Bringing years of expertise and a passion for sustainable, natural products to the brand. With a commitment to quality and innovation, Hiren’s vision is to make organic living accessible to everyone, ensuring every product reflects purity, health, and trust.
              </p>
            </div>

            <div className="group text-center">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="https://ik.imagekit.io/fhzl3efmm/user.png?updatedAt=1752248009316"
                  alt="Operations Head"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  style={{ height: '30rem', objectFit: 'fill' }}
                />
                <div className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-20 transition-opacity" />
              </div>
              <h3 className="font-bold text-xl mb-1">Kaushik Sojitra</h3>
              {/* <p className="text-green-600 font-medium mb-2">Founder  & Visionary</p> */}
              {/* <p className="text-sm text-gray-600">
                Driven by passion for purity and authenticity, Kaushik  leads Garuda Organic’s mission of delivering natural dairy and cereal to every household.
              </p> */}
              <p className="text-sm text-gray-600">
                Combining business acumen with a dedication to sustainability, Kaushik ensures that Garuda Organic stays at the forefront of the organic industry, delivering products that align with the values of health, transparency, and environmental responsibility.
              </p>
            </div>

            {/* <div className="group text-center">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Farm Manager"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-20 transition-opacity" />
              </div>
              <h3 className="font-bold text-xl mb-1">Amit Kumar</h3>
              <p className="text-green-600 font-medium mb-2">Farm Manager</p>
              <p className="text-sm text-gray-600">
                Expert in organic farming and animal care
              </p>
            </div> */}

            {/* <div className="group text-center">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Quality Head"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-20 transition-opacity" />
              </div>
              <h3 className="font-bold text-xl mb-1">Sneha Desai</h3>
              <p className="text-green-600 font-medium mb-2">Quality Assurance Head</p>
              <p className="text-sm text-gray-600">
                Maintains the highest quality standards
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
