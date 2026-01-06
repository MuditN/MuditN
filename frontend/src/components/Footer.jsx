import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © {currentYear} Mudit Nagori. All rights reserved.
          </p>
          <p className="text-sm">
            Built with React & FastAPI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;