import { useEffect, useState } from 'react';
import { cn } from '../lib/utils.js';

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"}, // fixed typo
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className="container flex items-center justify-between">
                <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">fohlabi</span> Portfolio
                    </span>
                </a>

                {/* Desktop nav */}
                <div className="hidden md:flex space-x-8 flex-1 justify-center">
                    {navItems.map((item) => (
                        <a key={item.name}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Hamburger button for mobile */}
                <button
                    className="md:hidden ml-4 flex flex-col justify-center items-center w-8 h-8"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                >
                    <span
                        className={cn(
                            "block w-6 h-0.5 bg-primary transition-all duration-300",
                            isMenuOpen ? "rotate-45 translate-y-2" : ""
                        )}
                    />
                    <span
                        className={cn(
                            "block w-6 h-0.5 bg-primary my-1 transition-all duration-300",
                            isMenuOpen ? "opacity-0" : ""
                        )}
                    />
                    <span
                        className={cn(
                            "block w-6 h-0.5 bg-primary transition-all duration-300",
                            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                        )}
                    />
                </button>

                {/* Mobile nav */}
                <div className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center md:hidden",
                    isMenuOpen ? "flex" : "hidden"
                )}>
                    {/* Close (X) button */}
                    <button
                        className="absolute top-6 right-6 flex flex-col justify-center items-center w-8 h-8"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <span
                            className="block w-6 h-0.5 bg-primary rotate-45 translate-y-2 transition-all duration-300"
                        />
                        <span
                            className="block w-6 h-0.5 bg-primary -rotate-45 -translate-y-2 transition-all duration-300"
                        />
                    </button>
                    <div className='flex flex-col space-y-8 text-xl'>
                        {navItems.map((item) => (
                            <a key={item.name}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;