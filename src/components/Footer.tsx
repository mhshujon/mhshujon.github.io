import React from 'react';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { GITHUB_URL, LINKEDIN_URL, WHATSAPP_URL, EMAIL_URL } from '../constants/social';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-xl font-bold">MD MONIR HOSSAIN</h3>
            <p className="text-gray-400">Web Application Engineer</p>
          </div>
          
          <div className="flex gap-6">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <Github size={24} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <MessageCircle size={24} />
            </a>
            <a
              href={EMAIL_URL}
              className="hover:text-blue-400 transition"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} MHSHUJON. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}