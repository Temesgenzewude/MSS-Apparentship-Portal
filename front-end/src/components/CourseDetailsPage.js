import React, { useState, useEffect } from 'react';
import Navbar from '../layouts/Navbar';
import axios from 'axios';

const sampleCourses = [
    {
        id: 1,
        title: 'Introduction to Web Development',
        videoUrl: 'https://www.youtube.com/watch?v=SqcY0GlETPk',
        description: 'Learn the basics of web development.',
    },
    {
        id: 2,
        title: 'Advanced React Concepts',
        videoUrl: 'https://www.youtube.com/watch?v=SqcY0GlETPk',
        description: 'Master advanced concepts in React.',
    },
    {
        id: 3,
        title: 'Advanced React Concepts',
        videoUrl: 'https://www.youtube.com/watch?v=SqcY0GlETPk',
        description: 'Master advanced concepts in React.',
    },
    {
        id: 4,
        title: 'Advanced React Concepts',
        videoUrl: 'https://www.youtube.com/watch?v=SqcY0GlETPk',
        description: 'Master advanced concepts in React.',
    },
    {
        id: 5,
        title: 'Advanced React Concepts',
        videoUrl: 'https://www.youtube.com/watch?v=SqcY0GlETPk',
        description: 'Master advanced concepts in React.',
    },
    {
        id: 6,
        title: 'Advanced React Concepts',
        videoUrl: 'https://www.youtube.com/watch?v=SqcY0GlETPk',
        description: 'Master advanced concepts in React.',
    },
    {
        id: 7,
        title: 'Advanced React Concepts',
        videoUrl: 'https://www.youtube.com/watch?v=SqcY0GlETPk',
        description: 'Master advanced concepts in React.',
    },
    {
        id: 8,
        title: 'Advanced React Concepts',
        videoUrl: 'https://www.youtube.com/watch?v=SqcY0GlETPk',
        description: 'Master advanced concepts in React.',
    },
    {
        id: 9,
        title: 'Advanced React Concepts',
        videoUrl: 'https://www.youtube.com/watch?v=SqcY0GlETPk',
        description: 'Master advanced concepts in React.',
    },
    {
        id: 10,
        title: 'Advanced React Concepts',
        videoUrl: 'https://www.youtube.com/watch?v=SqcY0GlETPk',
        description: 'Master advanced concepts in React.',
    }
];

const CourseDetailsPage = ({ match }) => {
    const courseId = match.params.id; // Assuming you get the course ID from the route

    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);

    useEffect(() => {
        // Fetch course list from your Laravel backend
        axios.get('/api/courses')
            .then(response => {
                setCourses(response.data);
            })
            .catch(error => {
                console.error('Error fetching course list:', error);
            });
    }, []);

    useEffect(() => {
        if (selectedCourse === null && courses.length > 0) {
            setSelectedCourse(courses.find(course => course.id === parseInt(courseId, 10)));
        }
    }, [selectedCourse, courseId, courses]);

    if (courses.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navbar />
            <div className="flex">
                <div className="w-2/3 pr-8">
                    {selectedCourse && (
                        <div>
                            <h2>{selectedCourse.title}</h2>
                            <video controls width="100%" src={selectedCourse.videoUrl}>
                                Your browser does not support the video tag.
                            </video>
                            <p>{selectedCourse.description}</p>
                        </div>
                    )}
                </div>
                <div className="w-1/3">
                    <h2>Course List</h2>
                    <ul>
                        {courses.map(course => (
                            <li key={course.id}>
                                <button
                                    onClick={() => setSelectedCourse(course)}
                                    className={`mb-2 p-2 ${selectedCourse && selectedCourse.id === course.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                                        }`}
                                >
                                    {course.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CourseDetailsPage;
