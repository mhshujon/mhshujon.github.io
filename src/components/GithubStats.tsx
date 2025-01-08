import { Github } from 'lucide-react';

export default function GitHubStats() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center gap-2 mb-12">
                    <Github className="text-blue-600" size={28} />
                    <h2 className="text-3xl font-bold text-gray-800">GitHub Contributions</h2>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <div className="flex justify-center">
                            <img
                                src="https://streak-stats.demolab.com/?user=mhshujon&theme=transparent&hide_border=true&stroke=#2196f3&ring=#2196f3&fire=#2196f3&currStreakNum=#475569&sideNums=#475569&currStreakLabel=#475569&sideLabels=#475569&dates=#94a3b8"
                                alt="GitHub Streak Stats"
                                className="rounded-lg max-w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}