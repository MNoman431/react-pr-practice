import React from 'react';
import Carousel from '../components/Carousel';
import Features from '../components/Features';

const Home = () => {
  const recentBlogs = [
    {
      id: 1,
      title: 'Getting Started with React',
      author: 'John Doe',
      date: 'March 10, 2024',
      category: 'Technology',
      excerpt: 'Learn the basics of React and how to build modern web applications...',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop'
    },
    {
      id: 2,
      title: 'The Art of Blogging',
      author: 'Jane Smith',
      date: 'March 8, 2024',
      category: 'Lifestyle',
      excerpt: 'Tips and tricks to improve your blogging skills and reach more readers...',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'Web Design Trends 2024',
      author: 'Mike Johnson',
      date: 'March 5, 2024',
      category: 'Design',
      excerpt: 'Explore the latest trends in web design this year and how to implement them...',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop'
    },
    {
      id: 4,
      title: 'Productivity Tips',
      author: 'Sarah Lee',
      date: 'February 28, 2024',
      category: 'Productivity',
      excerpt: 'Simple habits to boost your productivity and achieve your goals faster...',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=250&fit=crop'
    },
    {
      id: 5,
      title: 'Digital Marketing Basics',
      author: 'Tom White',
      date: 'February 25, 2024',
      category: 'Marketing',
      excerpt: 'A comprehensive guide to digital marketing strategies for beginners...',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=250&fit=crop'
    },
    {
      id: 6,
      title: 'Travel Guide: Tokyo',
      author: 'Emma Wilson',
      date: 'February 20, 2024',
      category: 'Travel',
      excerpt: 'Discover the best places to visit, eat, and explore in Tokyo...',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb305acc18?w=400&h=250&fit=crop'
    }
  ];

  return (
    <div>
      {/* Carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Carousel />
      </div>

      {/* Features */}
      <Features />

      {/* Recent Blogs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600">
              Read the most recent stories from our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:scale-105 cursor-pointer"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                    <span className="text-sm text-gray-500">{blog.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{blog.excerpt}</p>
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-600">By {blog.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition">
              View All Articles
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
