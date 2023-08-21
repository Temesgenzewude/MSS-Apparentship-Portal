import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../layouts/Footer';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/login', {
                email,
                password
            });

            // Check if login was successful (customize this according to your Laravel setup)
            if (response.data.success) {
                // Redirect to dashboard or desired page
                window.location.href = '/dashboard';
            } else {
                setErrorMessage('Invalid email or password');
            }
        } catch (error) {
            console.error(error);
            setErrorMessage('An error occurred. Please try again.');
        }
    };

    return (
        <>
            <div id='login' className="min-h-screen flex items-center justify-center bg-gray-100">
                <Link to="/" className="flex items-center absolute top-10 left-12 text-blue-600 hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Back to Home
                </Link>
                <div className="bg-white p-8 rounded-md shadow-md w-96">
                    <h2 className="text-2xl font-semibold mb-4">Log In</h2>
                    {errorMessage && (
                        <p className="text-red-500 mb-2">{errorMessage}</p>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block font-medium mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block font-medium mb-2">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                            </div>
                        </div>
                        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Log In</button>
                    </form>
                    <div className="flex items-center justify-between mt-4">
                        <a href="#" className="text-blue-600 hover:underline">Forgot Password?</a>
                        <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default LoginPage;
