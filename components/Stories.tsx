// components/Stories.tsx
"use client"; // Add this line

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Story from './Story';
import StoryIcon from './StoryIcon';
import styles from '../styles/Stories.module.css';

const Stories: React.FC = () => {
  const [stories, setStories] = useState<{ id: number; image: string; duration: number }[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchStories = async () => {
      const response = await axios.get('/api/stories');
      setStories(response.data);
    };
    fetchStories();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex !== null ? (prevIndex + 1) % stories.length : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex !== null ? (prevIndex - 1 + stories.length) % stories.length : 0));
  };

  const handleClose = () => {
    setCurrentIndex(null);
  };

  if (stories.length === 0) return null;

  return (
    <div className={styles.storiesContainer}>
      <div className={styles.storyIcons}>
        {stories.map((story, index) => (
          <StoryIcon
            key={story.id}
            story={story}
            onClick={() => setCurrentIndex(index)}
            isActive={index === currentIndex}
          />
        ))}
      </div>
      {currentIndex !== null && (
        <div className={styles.storyViewer}>
          <Story story={stories[currentIndex]} onNext={handleNext} onPrev={handlePrev} />
          <div className={styles.closeButton} onClick={handleClose}>X</div>
        </div>
      )}
    </div>
  );
};

export default Stories;
