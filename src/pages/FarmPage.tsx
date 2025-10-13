import { MapPin, Droplet, Sun, TreePine } from 'lucide-react';


export default function FarmPage() {
  return (
    <div className="min-h-screen">
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/533982/pexels-photo-533982.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Farm</h1>
            <p className="text-xl md:text-2xl">Where Nature Meets Tradition</p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://ik.imagekit.io/fhzl3efmm/ALL/Category%20image%20milk%20600X400.jpg?updatedAt=1760072571198"
              alt="Our Farm"
              className="rounded-lg shadow-xl"
            />
            <div>
              <h2 className="text-4xl font-bold mb-6">Welcome to Our Farm</h2>
              <p className="text-lg text-gray-700 mb-4">
                Nestled in the lush countryside of Gir, our 50-acre organic farm is a haven
                for sustainable agriculture and ethical dairy farming. Here, we practice traditional
                farming methods passed down through generations, combined with modern organic
                certification standards.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our farm is home to over 100 indigenous Gir cows, who roam freely across green
                pastures, graze on natural grass, and live in harmony with nature. We believe happy
                cows produce the best milk, and our commitment to their well-being shows in every
                drop.
              </p>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5 text-green-600" />
                <span>Junagadh, Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Farming Practices</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <TreePine className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">Chemical-Free Farming</h3>
              <p className="text-gray-700">
                We use zero chemical pesticides, herbicides, or synthetic fertilizers. Our crops and
                pastures are maintained using natural composting and organic methods.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Droplet className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">Water Conservation</h3>
              <p className="text-gray-700">
                We practice rainwater harvesting and drip irrigation to minimize water waste. Our
                farm has multiple natural water sources and ponds for sustainable water management.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Sun className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">Solar Powered</h3>
              <p className="text-gray-700">
                Our farm operations are powered by solar energy, reducing our carbon footprint and
                ensuring sustainable energy use throughout our facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Farm Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg group">
              <img
                src="https://ik.imagekit.io/fhzl3efmm/krishna.jpg?updatedAt=1751604992761"
                alt="Our Gir Cows"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg">Our Gir Cows</h3>
                </div>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg group">
              <img
                src="https://images.pexels.com/photos/533982/pexels-photo-533982.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Green Pastures"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg">Organic Wheat</h3>
                </div>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg group">
              <img
                src="https://ik.imagekit.io/fhzl3efmm/gir2.jpg?updatedAt=1751604992718"
                alt="Organic Fields"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg">Cows</h3>
                </div>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg group">
              <img
                src="https://ik.imagekit.io/fhzl3efmm/kachri1.png?updatedAt=1751604993206"
                alt="Farm Activities"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg">Farm Activities</h3>
                </div>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg group">
              <img
                src="https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fresh Produce"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg">Fresh Produce</h3>
                </div>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg group">
              <img
                src="https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Organic Vegetables"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg">Organic Vegetables</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Visit Our Farm</h2>
          <p className="text-lg mb-8" style={{ marginBottom: '0' }}>
            We welcome visitors to experience organic farming firsthand. Book a farm tour and see
            where your food comes from!
          </p>

          
          {/* <button
              onClick={() => onNavigate('contact')}
              
            >
              Contact
            </button> */} 

        </div>
      </section>
    </div>
  );
}
