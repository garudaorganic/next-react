import { Calendar, User, Tag } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogPost2Props {
  post: BlogPost;
  onNavigate: (page: string) => void;
}

export default function BlogPost2({ post, onNavigate }: BlogPost2Props) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => onNavigate('blog')}
          className="text-green-600 hover:text-green-700 mb-6 inline-block"
        >
          ← Back to Blog
        </button>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={post.featured_image}
            alt={post.title}
            className="w-full h-96 object-cover"
          />

          <div className="p-8">
            <div className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded mb-4">
              {post.category}
            </div>

            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

            <div className="flex items-center gap-6 text-gray-600 mb-6 pb-6 border-b">
              <span className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {new Date(post.published_at).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>

            <div className="prose max-w-none mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{post.excerpt}</p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Golden, aromatic, and full of flavor—ghee has been a cornerstone of Indian kitchens for centuries. But not all ghee is equal. The difference lies in how it’s made. At Garuda Organic, we use the traditional bilona method to create Gir Cow A2 Ghee—a process that preserves its rich nutrition and authentic taste.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">What is Bilona Ghee?</h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                The bilona process is an ancient method where ghee is churned from curd, not cream. This makes it lighter, more nutritious, and more digestible. Though time-consuming, this process retains the essence of true Ayurvedic ghee.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Health Benefits of Bilona Ghee</h2>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="text-gray-700">Improves Digestion – Acts as a natural lubricant for the digestive tract.</li>
                <li className="text-gray-700">Boosts Immunity – Contains vitamins A, D, E, and K that strengthen the immune system.</li>
                <li className="text-gray-700">Supports Brain & Memory – Rich in healthy fats that nourish brain cells.</li>
                <li className="text-gray-700">Skin & Hair Health – Keeps skin glowing and hair strong.</li>
                <li className="text-gray-700">Detoxifying Agent – Used in Ayurveda for Panchakarma and other treatments.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Why Gir Cow Ghee is Special</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Gir Cow A2 milk contains A2 protein and higher levels of good fats, making the ghee golden, aromatic, and medicinal in nature. In Ayurveda, it’s even referred to as “liquid gold.”
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">How Garuda Organic Makes Ghee</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li className="text-gray-700">Fresh Gir Cow A2 milk is turned into curd.</li>
                  <li className="text-gray-700">Curd is hand-churned using the bilona method.</li>
                  <li className="text-gray-700">Butter is slowly simmered to produce golden ghee.</li>
                  <li className="text-gray-700">Packed fresh, retaining its natural aroma and nutrition.</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-800">Everyday Uses</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li className="text-gray-700">Cooking (adds flavor & nutrition)</li>
                  <li className="text-gray-700">Ayurveda remedies (immunity booster, digestion aid)</li>
                  <li className="text-gray-700">Skincare (natural moisturizer)</li>
                  <li className="text-gray-700">Rituals (considered sacred in puja and havan)</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 text-gray-800">Conclusion</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
               Bilona ghee is more than food—it’s tradition, medicine, and heritage in one spoonful. Garuda Organic brings you this golden superfood in its purest form.
              </p>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">👉 Experience golden goodness with Garuda Organic Gir Cow A2 Bilona Ghee.</h3>
              </div>

              <h2 className="text-2xl font-bold mt-8 mb-4">Our Organic Practices at Garuda Farm</h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                At Garuda Organic, we practice what we preach. Our farm follows strict organic standards:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="text-gray-700">Natural composting and vermiculture for soil enrichment</li>
                <li className="text-gray-700">Crop rotation to maintain soil fertility</li>
                <li className="text-gray-700">Biological pest control using beneficial insects</li>
                <li className="text-gray-700">Rainwater harvesting and drip irrigation</li>
                <li className="text-gray-700">Native breed cattle raised on organic feed</li>
                <li className="text-gray-700">No hormones, antibiotics, or growth promoters</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                Choosing organic is not just a dietary choice—it's a vote for a healthier planet, fairer farming practices, and a sustainable future. Every organic product you buy supports farmers who care for the land and helps build a food system that nourishes rather than depletes.
              </p>

              <p className="text-green-600 font-semibold text-lg mt-6">
                Join the organic revolution. Choose Garuda Organic for pure, sustainable nutrition.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-6 border-t">
              <Tag className="w-5 h-5 text-gray-400" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded hover:bg-green-100 hover:text-green-700 cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
