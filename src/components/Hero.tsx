import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80"
          alt="Hero background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 animate-fade-in">
              Web Application Engineer
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl animate-slide-up">
              With over 4 years of experience crafting modern web applications. 
              Specialized in building scalable, user-centric solutions that drive business growth.
            </p>
            <div className="flex gap-4 animate-fade-in">
              <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Get in Touch
              </a>
              <a href="#projects" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                View Projects
              </a>
            </div>
            <div className="flex gap-4 text-gray-600">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                <Linkedin size={24} />
              </a>
              <a href="mailto:your.email@example.com" className="hover:text-blue-600 transition">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-blue-100 animate-float">
              <img
                src="https://images.unsplash.com/photo-1573495627361-d9b87960b12d?auto=format&fit=crop&q=80"
                alt="Profile"
                className="w-full h-full object-cover rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}