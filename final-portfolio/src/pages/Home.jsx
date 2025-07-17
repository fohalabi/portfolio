import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import HeroSection from "../components/HeroSection";

const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme toggle */}
            <ThemeToggle />
            {/* background Effect */}
            {/* navbar */}
            <Navbar />
            {/* main content */}
            <main>
                <HeroSection />
            </main>
            {/* footer */}
        </div>
    );
}

export default Home;