import mongoose from 'mongoose';

const lessonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    content: {
      type: String,
      required: true,
      minlength: 400
    }
  },
  { _id: true }
);

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    area: {
      type: String,
      required: true,
      enum: [
        'Front End',
        'Back End',
        'Cloud',
        'UX/UI',
        'Arquitectura de Software',
        'Metodologías Ágiles'
      ]
    },
    initialLevel: {
      type: [lessonSchema],
      default: []
    },
    meddleLevel: {
      type: [lessonSchema],
      default: []
    },
    advancedLevel: {
      type: [lessonSchema],
      default: []
    }
  },
  { timestamps: true }
);

export const Course = mongoose.model('Course', courseSchema);