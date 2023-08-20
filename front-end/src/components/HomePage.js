// import React, { useState, useEffect } from 'react';
import HomeLandingPage from './HomeLandingPage';
import Navbar from '../layouts/Navbar';
import Layout from '../layouts/Layout';
import CourseRecommendation from './CourseRecommendation';
import InternshipCard from './InternshipCard';
import TestimonialSlider from './TestimonialSlider';
import SubscriptionCard from './SubscriptionCard';
import Footer from '../layouts/Footer';

function HomePage() {

    // const [courses, setCourses] = useState([]);

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/photos')
    //         .then((response) => response.json())
    //         .then((data) => setCourses(data))
    //         .catch((error) => console.error('Error fetching course data:', error));
    // }, []);

    const courses = [
        {
            id: 1,
            title: 'Course 1',
            description: 'This is the first course description',
            rating: 4.5,
            totalTime: '2h 30m',
            peopleFinished: 50,
            imageUrl: '../images/thumb1.jpg',
        },
        {
            id: 2,
            title: 'Course 1',
            description: 'This is the first course description',
            rating: 4.5,
            totalTime: '2h 30m',
            peopleFinished: 50,
            imageUrl: '../images/thumb2.jpg',
        },
        {
            id: 3,
            title: 'Course 1',
            description: 'This is the first course description',
            rating: 4.5,
            totalTime: '2h 30m',
            peopleFinished: 50,
            imageUrl: '../images/thumb3.jpg',
        },
        {
            id: 4,
            title: 'Course 4',
            description: 'This is the first course description',
            rating: 4.5,
            totalTime: '2h 30m',
            peopleFinished: 50,
            imageUrl: '../images/thumb4.jpg',
        },
    ];

    return (
        <>
            <Layout>
                <Navbar />
                <HomeLandingPage />
            </Layout>
            <section id='courses' className="md:px-12 lg:px-16 mx-auto pt-24 px-4">
                <div className='mb-6 flex items-center flex-col'>
                    <h1 className="text-3xl font-semibold text-customBlue mb-4 text-center">
                        Welcome to Our Course Recommendations
                    </h1>
                    <p className="text-customBlue mb-8 text-center">
                        Check out our top-rated courses to enhance your skills!
                    </p>
                    <div className="w-full flex justify-end">
                        <button className='rounded-md shadow-lg transition-shadow duration-500 hover:shadow-xl p-2 mr-4 mb-4 text-white bg-customPurple'>
                            <a href='/courses'>View more courses</a>
                        </button>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    {courses.map((course) => (
                        <div key={course.id} className="w-1/2 lg:w-1/4 px-2 mb-8">
                            <CourseRecommendation course={course} />
                        </div>
                    ))}
                </div>
            </section>
            <div id='internship' className="flex justify-center items-center md:px-24 lg:px-32 mx-auto pt-24 px-8">
                <InternshipCard
                    title="Software Developer Internship"
                    description="Work on exciting projects and gain valuable experience in software development."
                    available={true}
                />
            </div>
            <TestimonialSlider />
            <Footer />
        </>
    )
}

export default HomePage;
