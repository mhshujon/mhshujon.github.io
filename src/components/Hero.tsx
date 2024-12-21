import { Github, Linkedin, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { GITHUB_URL, LINKEDIN_URL, WHATSAPP_URL, EMAIL_URL } from '../constants/social';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center py-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-90" />
        <img
          src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80"
          alt="Hero background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 cursor-pointer hover:bg-blue-100 transition-colors mx-auto lg:mx-0" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <span className="text-sm font-medium">Available for Projects</span>
              <ArrowRight size={16} />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 animate-fade-in leading-tight">
                Web Application <span className="text-blue-600">Engineer</span>
              </h1>
              <p className="text-xl text-gray-600 animate-slide-up">
                With over 4 years of experience crafting modern web applications. 
                Specialized in building scalable, user-centric solutions that drive business growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition group"
              >
                Get in Touch
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                View Projects
              </a>
            </div>

            <div className="flex gap-6 pt-4 pb-8 justify-center lg:justify-start">
              <a 
                href={GITHUB_URL}
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href={LINKEDIN_URL}
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={WHATSAPP_URL}
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a 
                href={EMAIL_URL}
                className="p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative mt-10 lg:mt-0">
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-100 to-white animate-float">
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
    </div>
  );
}