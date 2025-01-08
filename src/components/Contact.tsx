import { Toaster } from 'react-hot-toast';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="grid md:grid-cols-2">
                            <ContactInfo />
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
            <Toaster position="bottom-right" />
        </section>
    );
}