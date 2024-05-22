// components/Story.tsx
"use client"; // Add this line

import React, { useEffect } from 'react';
import styles from '../styles/Story.module.css';

interface StoryProps {
  story: { id: number; image: string; duration: number };
  onNext: () => void;
  onPrev: () => void;
}

const Story: React.FC<StoryProps> = ({ story, onNext, onPrev }) => {
  useEffect(() => {
    const timer = setTimeout(onNext, story.duration);
    return () => clearTimeout(timer);
  }, [story, onNext]);

  return (
    <div className={styles.story}>
      <img src={story.image} alt={`Story ${story.id}`} />
      <div className={styles.controls}>
        <div className={styles.prev} onClick={onPrev}></div>
        <div className={styles.next} onClick={onNext}></div>
      </div>
    </div>
  );
};

export default Story;
