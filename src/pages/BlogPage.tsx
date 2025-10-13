import { Calendar, User, Tag } from 'lucide-react';
import { blogPosts } from '../data/mockData';
import { BlogPost } from '../types';

interface BlogPageProps {
  onNavigate: (page: string, data?: any) => void;
}

export default function BlogPage({ onNavigate }: BlogPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Knowledge Hub</h1>
          <p className="text-lg">Health Tips, Farming Insights & Organic Living</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <aside className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <h3 className="font-semibold text-lg mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <button className="block w-full text-left px-3 py-2 rounded hover:bg-green-50 hover:text-green-700">
                    All Posts
                  </button>
                </li>
                <li>
                  <button className="block w-full text-left px-3 py-2 rounded hover:bg-green-50 hover:text-green-700">
                    Health & Nutrition
                  </button>
                </li>
                <li>
                  <button className="block w-full text-left px-3 py-2 rounded hover:bg-green-50 hover:text-green-700">
                    Farming Practices
                  </button>
                </li>
                <li>
                  <button className="block w-full text-left px-3 py-2 rounded hover:bg-green-50 hover:text-green-700">
                    Organic Farming
                  </button>
                </li>
                <li>
                  <button className="block w-full text-left px-3 py-2 rounded hover:bg-green-50 hover:text-green-700">
                    Recipes
                  </button>
                </li>
              </ul>
            </div>
          </aside>

          <main className="md:col-span-2">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.published_at).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                      </div>

                      <div className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded mb-3">
                        {post.category}
                      </div>

                      <h2 className="text-2xl font-bold mb-3 hover:text-green-600 cursor-pointer">
                        <button onClick={() => onNavigate('blog-post', post)}>
                          {post.title}
                        </button>
                      </h2>

                      <p className="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>

                      <div className="flex items-center gap-2 mb-4">
                        <Tag className="w-4 h-4 text-gray-400" />
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-sm text-gray-600 hover:text-green-600 cursor-pointer"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button
                        onClick={() => onNavigate('blog-post', post)}
                        className="text-green-600 font-medium hover:text-green-700 hover:underline"
                      >
                        Read More →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
