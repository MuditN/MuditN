import React from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { Button } from './ui/button';
import { profileData } from '../data/mock';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            I'm always interested in discussing new opportunities, challenging projects, and collaborations.
          </p>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Email */}
            <a
              href={`mailto:${profileData.email}`}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 group"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="bg-blue-600 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6" />
                </div>
                <span className="font-semibold">Email</span>
                <span className="text-sm text-gray-400 break-all">{profileData.email}</span>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 group"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="bg-blue-600 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="h-6 w-6" />
                </div>
                <span className="font-semibold">LinkedIn</span>
                <span className="text-sm text-gray-400">Connect with me</span>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 group"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="bg-blue-600 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Github className="h-6 w-6" />
                </div>
                <span className="font-semibold">GitHub</span>
                <span className="text-sm text-gray-400">View my code</span>
              </div>
            </a>
          </div>

          {/* Download Resume CTA */}
          <Button
            size="lg"
            onClick={() => window.open(profileData.resumeUrl, '_blank')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 text-base transition-all duration-300 hover:scale-105"
          >
            <Send className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;