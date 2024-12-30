import {LucideIcon} from 'lucide-react';
import React from "react";

type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = {
    children: React.ReactNode;
    variant?: ButtonVariant;
    Icon?: LucideIcon;
    onClick?: () => void;
    className?: string;
};

export default function Button({
   children,
   variant = 'primary',
   Icon,
   onClick,
   className = ''
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg transition";
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
            {Icon && <Icon className="group-hover:translate-x-1 transition-transform" size={20}/>}
        </button>
    );
}