import React from 'react';

const OurStory = () => {
  const milestones = [
    {
      year: '2020',
      title: 'Founded',
      description: 'BlogHub was founded with a vision to democratize content creation and empower writers globally.'
    },
    {
      year: '2021',
      title: '100K Users',
      description: 'We hit 100,000 active users and celebrated our first year of successful blogging platform.'
    },
    {
      year: '2022',
      title: 'Premium Launch',
      description: 'Introduced premium features to help professional writers monetize their content.'
    },
    {
      year: '2023',
      title: '1M Articles',
      description: 'Reached 1 million articles published by our vibrant community of writers.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Co-Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop'
    },
    {
      name: 'Michael Chen',
      role: 'Co-Founder & CTO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop'
    },
    {
      name: 'David Park',
      role: 'Lead Designer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            From a small idea to a global blogging platform helping thousands of writers share their stories
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We believe everyone has a story worth sharing. Our mission is to provide a platform where writers of all skill levels can express themselves, build communities, and inspire others. We're committed to making content creation accessible, enjoyable, and rewarding for everyone.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We envision a world where quality content thrives, where writers are recognized and rewarded for their work, and where diverse voices are heard. BlogHub aims to be the go-to platform for anyone looking to start their blogging journey or grow their existing audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section className="py-16 md:py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-16">Our Journey</h2>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-600 text-white">
                    <span className="text-2xl font-bold">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-grow bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 text-lg">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-16">Meet Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-16">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in everything we do, from product features to customer service.</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Community</h3>
              <p className="text-gray-600">We believe in the power of community and foster connections among writers and readers.</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Innovation</h3>
              <p className="text-gray-600">We continuously innovate to provide cutting-edge features and better user experiences.</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Inclusivity</h3>
              <p className="text-gray-600">We celebrate diversity and create an inclusive platform for everyone to share their voice.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
