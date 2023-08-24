import React from 'react';
import CourseCard from './CourseCard';

const CourseList = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
