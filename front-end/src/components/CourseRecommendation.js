// CourseRecommendation.js
import React from 'react';
import { Link } from 'react-router-dom';

const CourseRecommendation = ({ course }) => {
    if (!course) {
        return <div>Loading...</div>;
    }

    const { id, title, description, rating, totalTime, peopleFinished, imageUrl } = course;

    return (
        <div to={`/courses`} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <a href={`/courses`}>
                <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
            </a>
            <div className="p-4 flex flex-col flex-grow">
                <a href={`/courses/${id}`}>
                    <h2 className="text-xl font-semibold text-blue-800">{title}</h2>
                </a>
                <p className="text-gray-600 mt-2 flex-grow">{description}</p>
                <div className="flex items-center mt-4">
                    <div className="flex items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-yellow-500 fill-yellow-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        <span>{rating}</span>
                    </div>
                </div>
                <div className="flex items-center mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{totalTime} Total Time</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                    {peopleFinished} {peopleFinished === 1 ? 'person' : 'people'} finished this course
                </p>
            </div>
        </div>
    );
};

export default CourseRecommendation;
