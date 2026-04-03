import { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  titles: string[];
  displayElement?: 'h1' | 'span' | 'div';
  className?: string;
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  titles,
  displayElement: Element = 'h1',
  className = ''
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  // Main typing/erasing loop
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];

    if (isTyping) {
      // Typing phase
      if (displayedText.length < currentTitle.length) {
        const typingTimeout = setTimeout(() => {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        }, 100); // 100ms per character

        return () => clearTimeout(typingTimeout);
      } else {
        // Finished typing, pause before erasing
        const pauseTimeout = setTimeout(() => {
          setIsTyping(false);
        }, 1200); // 1200ms pause

        return () => clearTimeout(pauseTimeout);
      }
    } else {
      // Erasing phase
      if (displayedText.length > 0) {
        const erasingTimeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 60); // 60ms per character

        return () => clearTimeout(erasingTimeout);
      } else {
        // Finished erasing, move to next title and start typing
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, currentTitleIndex, isTyping, titles]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Blink every 500ms

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <Element className={className}>
      {displayedText}
      <span style={{ visibility: showCursor ? 'visible' : 'hidden' }}>|</span>
    </Element>
  );
};