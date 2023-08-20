import React, { useState } from 'react';
import axios from 'axios';

const SubscriptionCard = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubscribe = async () => {
        try {
            // Simulating subscription process with a POST request to a Laravel endpoint
            const response = await axios.post('/subscribe', { email });

            if (response.data.success) {
                setMessage('Subscribed successfully!');
            } else {
                setMessage('Subscription failed. Please try again.');
            }
        } catch (error) {
            setMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">
                Subscribe for Get Update Every New Courses
            </h2>
            <p className="text-gray-600 mb-4">
                1k+ students daily learn with MSS. Subscribe for new courses.
            </p>
            <div className="flex items-center">
                <input
                    type="email"
                    className="w-48 border border-gray-300 rounded px-3 py-2 mr-2 focus:outline-none focus:border-blue-500"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    className="bg-customPurple text-white px-4 py-2 rounded hover:shadow-md"
                    onClick={handleSubscribe}
                >
                    Subscribe
                </button>
            </div>
            {message && <p className="mt-2 text-sm text-gray-500">{message}</p>}
        </div>
    );
};

export default SubscriptionCard;
