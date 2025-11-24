import React from 'react';

export const Footer = () => (
  <footer className="bg-jam-900 border-t border-jam-800 py-8 mt-12">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p className="text-jam-400 text-sm">
        © {new Date().getFullYear()} Vocal Jam. 
        <span className="block sm:inline sm:ml-2">Libérez l'artiste en vous.</span>
      </p>
      <div className="mt-4 flex justify-center space-x-6">
        <span className="text-gray-500 text-xs">Technologie Live Karaoké</span>
        <span className="text-gray-500 text-xs">Audio Pro</span>
        <span className="text-gray-500 text-xs">Powered by Gemini</span>
      </div>
    </div>
  </footer>
);