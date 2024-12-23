import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { Send } from 'lucide-react';
import { useHoneypot } from '../../hooks/useHoneypot';
import { env } from '../../config/env';

export default function ContactForm() {
    const { honeypotField, isBot } = useHoneypot();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (isBot) {
            return;
        }

        setIsSubmitting(true);

        try {
            await emailjs.send(
                env.emailjs.serviceId,
                env.emailjs.templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                env.emailjs.publicKey
            );

            toast.success('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            toast.error('Failed to send message. Please try again.');
            console.error('Email send error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="p-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                <input {...honeypotField as React.InputHTMLAttributes<HTMLInputElement>} />

                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                    </label>
                    <textarea
                        id="message"
                        required
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        'Sending...'
                    ) : (
                        <>
                            Send Message
                            <Send size={18} />
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}