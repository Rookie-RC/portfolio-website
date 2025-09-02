import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ strings, delay = 75, deleteSpeed = 50, loop = true }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [stringIndex, setStringIndex] = useState(0);

  useEffect(() => {
    const currentString = strings[stringIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing phase
        if (currentIndex < currentString.length) {
          setCurrentText(currentString.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          // Finished typing, start deleting after a pause
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // Deleting phase
        if (currentIndex > 0) {
          setCurrentText(currentString.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          // Finished deleting, move to next string
          setIsDeleting(false);
          if (loop || stringIndex < strings.length - 1) {
            setStringIndex((stringIndex + 1) % strings.length);
          }
        }
      }
    }, isDeleting ? deleteSpeed : delay);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, stringIndex, strings, delay, deleteSpeed, loop]);

  return (
    <span className="gradient-text">
      {currentText}
      <span className="typewriter-cursor">|</span>
    </span>
  );
};

export default TypewriterEffect;
