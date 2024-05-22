// components/StoryIcon.tsx
import React from 'react';
import styles from '../styles/StoryIcon.module.css';

interface StoryIconProps {
  story: { id: number; image: string; duration: number };
  onClick: () => void;
  isActive: boolean;
}

const StoryIcon: React.FC<StoryIconProps> = ({ story, onClick, isActive }) => {
  return (
    <div className={`${styles.storyIcon} ${isActive ? styles.active : ''}`} onClick={onClick}>
      <img src={story.image} alt={`Story ${story.id}`} />
    </div>
  );
};

export default StoryIcon;
