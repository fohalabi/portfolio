import { useState } from 'react';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        if (isDarkMode) {
            setIsDarkMode(false);
        } else {
            setIsDarkMode(true);
        }
    }

    return (
        <button onClick={toggleTheme}>
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300"/>
            ) : (
                <Moon className="h-6 w-6 text-blue-300"/>
            )}    
        </button>
    );
} 

export default ThemeToggle;