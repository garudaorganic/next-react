import { Calendar, User, Tag } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogPost3Props {
  post: BlogPost;
  onNavigate: (page: string) => void;
}

export default function BlogPost3({ post, onNavigate }: BlogPost3Props) {
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
                In today’s world, where packaged foods are often full of chemicals, the idea of drinking pure milk straight from the farm feels almost magical. At Garuda Organic, we make this possible every day by bringing you fresh Gir Cow A2 milk directly from our farm to your doorstep.

              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Step 1: Caring for Our Gir Cows</h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                Our journey starts with our Gir cows, a native Indian breed known for their nutritious A2 milk. We treat them like family—providing natural fodder, clean water, and a stress-free environment.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4">Step 2: Ethical Milking</h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                We follow ethical milking practices, ensuring the calf gets its share first. Only the surplus milk is collected for our customers. This respect for nature makes the milk more wholesome and sacred.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4">Step 3: Freshness & Hygiene</h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                Every drop of milk is handled with utmost care. After collection, the milk is immediately cooled to maintain freshness and prevent bacterial growth.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4">Step 4: Eco-Friendly Packaging</h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                We deliver milk in glass bottles—reusable, safe, and eco-friendly. No plastic, no compromise.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4">Step 5: Farm-to-Home Delivery</h2>

              <p className="text-gray-700 leading-relaxed mb-4">
               Within hours, the milk reaches your home—fresh, natural, and untouched.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Why This Matters</h2>
              <h2 className="text-2xl font-bold mt-8 mb-4">When you choose Garuda Organic, you choose:</h2>

              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li className="text-gray-700">
                  Freshness you can taste
                </li>
                <li className="text-gray-700">
                  Health you can trust
                </li>
                <li className="text-gray-700">
                  Sustainability you can support
                </li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                From nurturing our Gir cows to delivering milk at your doorstep, every step is done with love, honesty, and tradition. At Garuda Organic, it’s not just milk—it’s a promise of purity.
              </p>
              <h2 className="text-2xl font-bold mt-8 mb-4">Trust in every drop. Delivered fresh from Garuda Organic.</h2>

        
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
