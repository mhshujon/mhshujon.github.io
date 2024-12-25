import {Linkedin, Github, Twitter, Mail, MessageCircle, LucideIcon, Facebook} from 'lucide-react';

export const iconMap: Record<string, { component: LucideIcon; color: string }> = {
    linkedin: {component: Linkedin, color: "hover:text-blue-600"},
    github: {component: Github, color: "hover:text-gray-600"},
    twitter: {component: Twitter, color: "hover:text-blue-400"},
    facebook: {component: Facebook, color: "hover:text-blue-600"},
    email: {component: Mail, color: "hover:text-red-600"},
    whatsapp: {component: MessageCircle, color: "hover:text-green-600"},
};