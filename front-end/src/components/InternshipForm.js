import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../layouts/Footer';

const InternshipForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        year: '',
        campus: '',
        type: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await axios.post('/register', formData);
            if (response.data.success) {
                window.location.href = '/';
            } else {
                setErrorMessage('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error(error);
            setErrorMessage('An error occurred. Please try again.');
        }
        setIsLoading(false);
    };

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 my-20 rounded-md shadow-md w-full max-w-md">
                    <Link to="/" className="flex items-center absolute top-10 left-12 text-blue-600 hover:underline">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                        Back to Home
                    </Link>
                    <h2 className="text-2xl font-semibold mb-4">Please register</h2>
                    {errorMessage && (
                        <p className="text-red-500 mb-2">{errorMessage}</p>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols- gap-4">
                            <div>
                                <label htmlFor="firstName" className="block font-medium mb-2">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder='First Name'
                                    required
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block font-medium mb-2">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder='Last Name'
                                    required
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder='Email'
                                    required
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="phoneNumber" className="block font-medium mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    placeholder='09********'
                                    required
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="batch" className="block font-medium mb-2">
                                    Year
                                </label>
                                <select
                                    id="year"
                                    name="year"
                                    value={formData.year}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                >
                                    <option value="">Select year</option>
                                    <option value="1">1st</option>
                                    <option value="2">2nd</option>
                                    <option value="3">3rd</option>
                                    <option value="4">4th</option>
                                    <option value="5">5th</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="schoolId" className="block font-medium mb-2">
                                    Campus
                                </label>
                                <input
                                    type="text"
                                    id="schoolId"
                                    name="schoolId"
                                    value={formData.schoolId}
                                    onChange={handleChange}
                                    placeholder='eg. AAiT'
                                    required
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="type" className="block font-medium mb-2">
                                    Category
                                </label>
                                <select
                                    id="type"
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                >
                                    <option value="">Select category</option>
                                    <option value="">Sales</option>
                                    <option value="1">Front-End developer</option>
                                    <option value="2">Back-End developer</option>
                                    <option value="3">Mobile App developer</option>
                                    <option value="4">Graphics Designer</option>
                                    <option value="5">Maintenance</option>
                                </select>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded mt-4 hover:bg-blue-600"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Registering...' : 'Register'}
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default InternshipForm;
