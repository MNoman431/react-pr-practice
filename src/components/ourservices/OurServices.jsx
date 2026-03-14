import React from 'react';

const servicesData = [
  {
    title: "Web Development",
    description: "Creating responsive, fast, and SEO-friendly websites with modern technologies.",
    icon: "💻",
  },
  {
    title: "Mobile App Development",
    description: "Building Android and iOS apps with smooth performance and great UX.",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    description: "Designing beautiful interfaces and seamless user experiences.",
    icon: "🎨",
  },
  {
    title: "Digital Marketing",
    description: "Boosting your brand online through social media, SEO, and ads.",
    icon: "📢",
  },
  {
    title: "Cloud Solutions",
    description: "Deploying scalable cloud infrastructure for businesses of any size.",
    icon: "☁️",
  },
  {
    title: "E-Commerce Solutions",
    description: "Creating powerful e-commerce platforms to sell products online.",
    icon: "🛒",
  },
];

const OurServices = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 via-white to-purple-100 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-600 mb-12 text-lg">
          We provide a wide range of professional services to help your business grow.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-300"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;