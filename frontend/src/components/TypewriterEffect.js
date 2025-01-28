import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(currentIndex + 1);
            }, 20); // Adjust speed here (lower number = faster)

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text]);

    return <div>{displayedText}</div>;
};

export default TypewriterEffect; 