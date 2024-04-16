import React, { useState, useEffect } from 'react';
import styles from './ChangingWords.module.css'

const ChangingWords: React.FC = () => {
    const words = ['Fast', 'Safely', 'On Time', 'Hassel Free'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000); // Adjust the interval time as needed

        return () => clearTimeout(timeoutId);
    }, [currentWordIndex, words.length]); // Re-run effect whenever currentWordIndex changes

    return (
        <span className={styles.word}>{words[currentWordIndex]}</span>
    );
}

export default ChangingWords;
