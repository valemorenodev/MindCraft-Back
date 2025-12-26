import { progress, courses } from '../data/mock.db.js';

export const getProgressByUser = (req, res) => {
  const userId = Number(req.params.userId);

  const userProgress = progress
    .filter(p => p.userId === userId)
    .map(p => ({
      ...p,
      course: courses.find(c => c.id === p.courseId)
    }));

  res.json(userProgress);
};
export const updateProgress = (req, res) => {
  const userId = Number(req.params.userId);
  const courseId = Number(req.params.courseId);
  const { percent } = req.body;     

  const progressIndex = progress.findIndex(p => p.userId === userId && p.courseId === courseId);

  if (progressIndex === -1) {
    return res.status(404).json({ message: 'Progress not found' });
  }

  progress[progressIndex] = { ...progress[progressIndex], percent };
  res.json(progress[progressIndex]);
};