import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from "./components/Testimonials.tsx";
import GitHubStats from "./components/GithubStats.tsx";

function App() {
    return (
        <div className="min-h-screen bg-white">
            <Hero/>
            <Skills/>
            <Experience/>
            <Projects/>
            <GitHubStats />
            <Testimonials/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;