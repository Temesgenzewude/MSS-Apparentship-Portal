import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import Img from '../images/sila2.jpg';

const TestimonialSlider = () => {
    const [testimonials, setTestimonials] = useState([
        {
            id: 1,
            imageSrc: Img,
            quote: "Tailwind CSS is the only framework that I've seen scale on large teams.",
            author: 'Sarah Dayan',
            role: 'Staff Engineer, Algolia',
        },
        {
            id: 2,
            imageSrc: Img,
            quote: 'I love how Tailwind CSS makes it easy to create stunning designs.',
            author: 'John Doe',
            role: 'Frontend Developer',
        },
        {
            id: 3,
            imageSrc: Img,
            quote: 'As a UI/UX designer, Tailwind CSS has simplified my workflow.',
            author: 'Jane Smith',
            role: 'UI/UX Designer',
        },
    ]);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Use this effect to simulate fetching testimonials from backend
    // useEffect(() => {
    //   axios.get('/api/testimonials').then(response => setTestimonials(response.data));
    // }, []);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(slideInterval);
    }, [testimonials]);

    if (testimonials.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="block md:px-24 lg:px-32 mx-auto pt-6 px-8">
            <h1 className="text-3xl font-semibold text-customBlue mt-8 mb-10">
                What do our internees say?
            </h1>
            <TestimonialCard
                imageSrc={testimonials[currentSlide].imageSrc}
                quote={testimonials[currentSlide].quote}
                author={testimonials[currentSlide].author}
                role={testimonials[currentSlide].role}
            />
            <div className="flex mt-4 mb-16 justify-center">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2.5 h-2.5 mx-2 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
                            }`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialSlider;
