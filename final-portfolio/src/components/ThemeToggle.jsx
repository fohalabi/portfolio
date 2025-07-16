import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { cn } from "../lib/utils.js"

const ThemeToggle = () => {

    useEffect 
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }

    return (
        <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
            "focus:outlin-hidden"
        )}>
             
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300"/>
            ) : (
                <Moon className="h-6 w-6 text-blue-900"/>
            )}    
        </button>
    );
} 

export default ThemeToggle;