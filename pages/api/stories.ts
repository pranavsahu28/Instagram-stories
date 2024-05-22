// pages/api/stories.ts
import { NextApiRequest, NextApiResponse } from 'next';

const stories = [
  { id: 1, image: '/images/story1.jpg', duration: 5000 },
  { id: 2, image: '/images/story2.jpg', duration: 5000 },
  { id: 3, image: '/images/story3.jpg', duration: 5000 },
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(stories);
};
