import { courses } from '../data/mock.db.js';

export const getCourses = (req, res) => {
  res.json(courses);
};

export const getCourseById = (req, res) => {
  const course = courses.find(c => c.id === Number(req.params.id));
  if (!course) return res.status(404).json({ message: 'Course not found' });
  res.json(course);
};
export const createCourse = (req, res) => {
  const newCourse = {
    id: courses.length + 1,         
    title: req.body.title,
    area: req.body.area,
    description: req.body.description
  };
  courses.push(newCourse);
  res.status(201).json(newCourse);
};