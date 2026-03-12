import React from 'react';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: '✍️',
      title: 'Easy Publishing',
      description: 'Write and publish your stories in minutes with our intuitive editor'
    },
    {
      id: 2,
      icon: '👥',
      title: 'Build Community',
      description: 'Connect with readers and fellow writers from around the globe'
    },
    {
      id: 3,
      icon: '📊',
      title: 'Analytics',
      description: 'Track your blogs performance with detailed insights and statistics'
    },
    {
      id: 4,
      icon: '🎨',
      title: 'Customize',
      description: 'Personalize your profile and blogs with beautiful templates'
    },
    {
      id: 5,
      icon: '🔔',
      title: 'Notifications',
      description: 'Stay updated with comments, likes, and new follower alerts'
    },
    {
      id: 6,
      icon: '🌟',
      title: 'Premium Features',
      description: 'Access exclusive tools and reach a wider audience with premium plans'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose BlogHub?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to start and grow your blogging journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
