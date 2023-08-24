import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for API calls
import CategoryFilter from './CategoryFilter';
import CourseList from './CourseList';
import Pagination from './Pagination';
import Navbar from '../layouts/Navbar';
import Layout from '../layouts/Layout';
import Studying from '../images/studying.png'
import Footer from '../layouts/Footer';

import { courses as CoursesToDiaplay } from './HomePage';

const CourseListPage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [courses, setCourses] = useState([]);
    const [categories, setCategories] = useState([]);
    const itemsPerPage = 3;

    useEffect(() => {
        // Fetch courses and categories from the backend
        axios.get('/api/courses') // Replace the actual API endpoint
            .then(response => setCourses(response.data))
            .catch(error => console.error('Error fetching courses:', error));

        axios.get('/api/categories') // Replace the actual API endpoint
            .then(response => setCategories(response.data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    const onSelectCategory = (categoryId) => {
        setSelectedCategory(categoryId);
        setCurrentPage(1);
    };

    const coursesToShow = courses.filter(course => {
        if (selectedCategory) {
            return course.category === selectedCategory;
        }
        return true;
    });

    const totalPages = Math.ceil(coursesToShow.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedCourses = coursesToShow.slice(startIndex, endIndex);

    return (
        <>
            <Layout>
                <Navbar />
                <div className="container mx-auto pt-28">
                    <div className='flex items-center justify-between h-40 xl:h-40 p-4 rounded-2xl bg-gray-200'>
                        <h1 className='p-6 italic font-thin text-2xl sm:text-5xl'>Selected Courses For All Standards</h1>
                        <img src={Studying} alt='person studying' className='h-40' />
                    </div>
                    <h1 className="text-3xl font-semibold mt-4 mb-4">Course List</h1>
                    <CategoryFilter
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onSelectCategory={onSelectCategory}
                    />
                    {/* <CourseList courses={displayedCourses} /> */}

                    {/* Just Sample Courses to display */}
                    <CourseList courses={CoursesToDiaplay} />
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </Layout>
            <Footer />
        </>
    );
};

export default CourseListPage;
