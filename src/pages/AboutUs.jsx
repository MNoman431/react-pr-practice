import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="py-16 px-6 text-center bg-gray-50">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-600">
          Welcome to BlogSphere
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Your daily destination for insightful stories, technical deep-dives, and creative inspiration.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At BlogSphere, we believe that sharing knowledge is the best way to grow. Our platform is built 
            to empower writers and provide readers with a seamless, lightning-fast reading experience.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you're here to learn about the latest in web development or to find lifestyle tips, 
            we curate content that matters.
          </p>
        </div>
        <div className="bg-blue-100 h-64 rounded-2xl flex items-center justify-center">
           {/* Placeholder for an image or illustration */}
           <span className="text-blue-500 font-semibold italic text-xl">Connecting Ideas</span>
        </div>
      </section>

      {/* Tech Stack / Features Section */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">What Makes Us Different</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-700 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Modern Performance</h3>
              <p className="text-gray-400">Built with the latest technologies to ensure instant loading and smooth navigation.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Clean Design</h3>
              <p className="text-gray-400">A clutter-free interface focused entirely on the reading experience.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-xl hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-semibold mb-2">Community Focused</h3>
              <p className="text-gray-400">Interactive features that allow readers to engage and share their thoughts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Ready to start reading?</h2>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
          Explore the Blog
        </button>
      </section>
    </div>
  );
};

export default AboutUs;