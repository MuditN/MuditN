import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { aboutData } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          {/* Section Title */}
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          
          {/* Description */}
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            {aboutData.description}
          </p>

          {/* Highlights */}
          <div className="space-y-4">
            {aboutData.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-base leading-relaxed">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;