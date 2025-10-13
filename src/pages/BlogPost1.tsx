import { Calendar, User, Tag } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogPost1Props {
  post: BlogPost;
  onNavigate: (page: string) => void;
}

export default function BlogPost1({ post, onNavigate }: BlogPost1Props) {
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
                For generations, milk has been considered a complete food—a source of strength, growth, and vitality. Yet in recent years, many people have started questioning whether milk is truly healthy. The truth lies in what kind of milk you drink. Not all milk is created equal, and that's where A2 milk from Gir cows makes all the difference.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">What is A2 Milk?</h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                Most milk available today comes from hybrid cows and contains A1 protein. This protein is difficult for the human body to digest, often leading to bloating, discomfort, and intolerance in some people.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                In contrast, A2 milk—found naturally in native Indian breeds like the Gir cow—contains only the A2 beta-casein protein, which is easier to digest and much closer to the milk our ancestors consumed.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Health Benefits of A2 Milk</h2>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="text-gray-700">Gentle on Digestion – A2 protein is easy on the gut and suitable even for people with milk sensitivities.</li>
                <li className="text-gray-700">Boosts Immunity – Packed with calcium, protein, and healthy fats, it strengthens your natural defense system.</li>
                <li className="text-gray-700">Strengthens Bones & Muscles – Rich in nutrients essential for growing children and active adults.</li>
                <li className="text-gray-700">Supports Brain Health – Gir cow milk is known in Ayurveda for improving memory and focus.</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Ayurveda & A2 Milk</h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                In Ayurvedic tradition, cow's milk—especially from Indian breeds—is revered as a sattvic food, meaning it promotes clarity, calmness, and inner strength. Gir cow milk is particularly valued for its medicinal properties and spiritual purity.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Garuda Organic A2 Milk?</h2>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="text-gray-700">100% pure Gir Cow A2 milk</li>
                <li className="text-gray-700">Delivered fresh daily in eco-friendly glass bottles</li>
                <li className="text-gray-700">Free from chemicals, preservatives, and hormones</li>
                <li className="text-gray-700">From cows raised with love and natural care</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                Switching to A2 milk is not just about choosing a healthier option—it's about reviving a tradition that kept our ancestors strong and disease-free. With Garuda Organic, you give your family the gift of pure, authentic nourishment.
              </p>

              <p className="text-green-600 font-semibold text-lg mt-6">
                Make the switch today. Taste the difference of purity.
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
