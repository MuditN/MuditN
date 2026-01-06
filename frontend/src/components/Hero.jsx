import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Download } from 'lucide-react';
import { profileData } from '../data/mock';

const Hero = () => {
  const handleViewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    window.open(profileData.resumeUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1753715613457-63127ec40824"
          alt="Professional workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="max-w-3xl">
          {/* Location */}
          <p className="text-blue-400 font-medium mb-4 text-sm tracking-wide uppercase">
            {profileData.location}
          </p>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {profileData.name}
          </h1>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-400 mb-6">
            {profileData.title}
          </h2>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
            {profileData.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={handleViewProjects}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 text-base transition-all duration-300 hover:scale-105"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleDownloadResume}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-6 text-base transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white opacity-70"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;