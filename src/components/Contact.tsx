import {MessageSquare, Download, MapPin} from 'lucide-react';
import SocialIcons from "./SocialIcons.tsx";

export default function Contact() {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center gap-2 mb-12">
                    <MessageSquare className="text-blue-600" size={28}/>
                    <h2 className="text-3xl font-bold text-gray-800">Let's Connect</h2>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="grid md:grid-cols-2">
                            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-12 text-white">
                                <h3 className="text-2xl font-bold mb-6">Let's Build Something Amazing Together</h3>
                                <div className="space-y-4">
                                    <p className="flex items-center gap-3">
                                        <MapPin className="flex-shrink-0" size={20}/>
                                        <span>Available for remote work worldwide</span>
                                    </p>
                                    <p className="text-blue-100">
                                        I'm always excited to connect with fellow developers, potential clients,
                                        and anyone interested in web development and technology.
                                    </p>
                                </div>

                                <div className="mt-12">
                                    <h4 className="font-semibold mb-4">Connect with me</h4>
                                    <div className="flex gap-4">
                                        <SocialIcons
                                            hover="none"
                                            customClass="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                                            iconSize={24}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="p-12 flex items-center">
                                <div className="w-full">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Current Status</h3>
                                    <div className="space-y-6">
                                        <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                                            <span className="text-green-600 font-medium">Available for Work</span>
                                        </div>
                                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                                            <span className="text-blue-600 font-medium">Open to Collaboration</span>
                                        </div>
                                        <a
                                            href="/resume/resume.pdf"
                                            download
                                            className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                            <Download size={20}/>
                                            Download Resume
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}